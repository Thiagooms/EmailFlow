import os
import spacy
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

nlp = spacy.load("pt_core_news_lg")

def data_processing(text: str) -> str:

    doc = nlp(text)

    clean_tokens = [
        token.lemma_.lower() for token in doc
        if not token.is_stop and not token.is_punct and token.is_alpha
    ]

    return " ".join(clean_tokens)

def sort_email(text: str) -> dict:

    prompt = """
    
    Você é um sistema de IA especialista em processamento de emails. Sua função é analisar um email e retornar uma análise estruturada em JSON.
    Siga os seguintes passos:

    1.  Analise o conteúdo do email fornecido.
    2.  Classifique o email em uma das duas categorias abaixo:
    - 'Produtivo': Emails que exigem uma ação, contêm uma pergunta direta, ou são uma atualização importante sobre um trabalho em andamento.
    - 'Improdutivo': Emails sociais (agradecimentos, felicitações), spam, notificações automáticas ou que são puramente informativos e não necessitam de ação.
    3.  Gere uma sugestão de resposta curta e útil que seja apropriada para a categoria. A resposta deve manter um tom profissional e prestativo.

    REGRAS DE SAÍDA:
    - Sua saída DEVE SER um objeto JSON puro e válido.
    - NÃO inclua explicações, texto introdutório, ou marcadores de markdown como ```json.
    - Sua resposta deve começar com o caractere `{` e terminar com o caractere `}`.
    - As chaves do JSON devem ser 'categoria' e 'resposta_sugerida'.

    REGRA DE EXCEÇÃO:
    - Se um email for ambíguo ou você não tiver certeza, classifique-o como 'Produtivo' por segurança.

    """
    model = genai.GenerativeModel('gemini-2.5-flash')

    response = model.generate_content(prompt)

    cleaned_json = response.text.strip().replace("`json", "").replace("`", "")
    return json.loads(cleaned_json)
