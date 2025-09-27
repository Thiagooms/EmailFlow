from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/analyze", methods=['POST'])
def analyze_email():

    email_text = request.json.get('text')

    if not email_text:
        return jsonify({"error": "Nenhum texto fornecido"}), 400
    
    print(f"Email recebido para análise: {email_text[:50]}...")

    response_data = {
        "categoria": "Produtivo (Teste)",
        "resposta_sugerida": "Esta é uma resposta de teste gerada pela API Flask."
    }

    return jsonify(response_data)

@app.route("/")
def hello():
    return "<h1>Deploy feito a partir do GitHub!</h1>"