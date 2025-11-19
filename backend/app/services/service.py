import os
import spacy
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

nlp = spacy.load("pt_core_news_md")

def data_processing(text: str) -> str:

    doc = nlp(text)

    clean_tokens = [
        token.lemma_.lower() for token in doc
        if not token.is_stop and not token.is_punct and token.is_alpha
    ]

    return " ".join(clean_tokens)

def sort_email(text: str) -> dict:

    processed_text = data_processing(text)

    prompt = """
    
    You are an AI system specialized in analyzing corporate emails for a financial company that receives a high volume of daily emails. 
    Your task is to classify emails and generate short, professional automatic replies.

    =========================
    TASK OBJECTIVES
    =========================
    1. Analyze the provided email content carefully.
    2. Classify the email into one of the following two categories:
    - "Produtivo": Emails that require an action or a specific reply (e.g., support requests, updates on open cases, doubts about the system).
    - "Improdutivo": Emails that do NOT require immediate action (e.g., greetings, congratulations, thanks, irrelevant questions, spam).
    3. Generate a short and useful suggested reply in **Portuguese**, written in a professional and polite tone.
    - The reply must be relevant to the given email content.
    - Keep the reply concise (2–5 lines maximum).

    =========================
    OUTPUT RULES (CRITICAL)
    =========================
    - Your output MUST be **a valid JSON object only**. 
    - Do not include explanations, markdown, comments, or additional text. 
    - The JSON object MUST start with `{` and end with `}`.
    - The only two keys allowed are:
    - "categoria"
    - "resposta_sugerida"
    - "categoria" must be exactly one of: "Produtivo" OR "Improdutivo".
    - "resposta_sugerida" must be a short professional reply in **Portuguese**.

    =========================
    ERROR PREVENTION RULES
    =========================
    - Do not output raw text outside the JSON object.
    - Do not wrap the JSON in code blocks (no triple backticks).
    - Do not output explanations or reasoning steps.
    - If the email is ambiguous, always classify as "Produtivo" for safety.
    - If you cannot understand the email, classify as "Produtivo" and generate a neutral response like:
    "Agradeço seu contato. Poderia, por favor, fornecer mais detalhes para que possamos ajudar melhor?"

    =========================
    EXAMPLE OF VALID OUTPUT
    =========================
    {
    "categoria": "Produtivo",
    "resposta_sugerida": "Obrigado pelo seu contato. Estamos verificando sua solicitação e retornaremos em breve com uma atualização."
    }

    """
    model_name = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
    model = genai.GenerativeModel(model_name)

    full_prompt = f"{prompt}\n\nEmail para análise:\n---\n{processed_text}\n---"

    try:
        response = model.generate_content(full_prompt)
        cleaned_json = response.text.strip().replace("`json", "").replace("`", "")

        return json.loads(cleaned_json)

    except json.JSONDecodeError as e:
        return {"error": f"Falha ao decodificar JSON: {str(e)}"}

    except Exception as e:
        return {"error": f"Erro interno no serviço: {str(e)}"}
