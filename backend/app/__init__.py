from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from .services.service import sort_email

app = Flask(__name__)
CORS(app)

@app.route("/api/analyze", methods=['POST'])
def analyze_email():

    data = request.get_json()
    email_text = data.get('text')

    if not email_text:
        return jsonify({"error": "Nenhum texto fornecido"}), 400
    
    result = sort_email(email_text)

    if "error" in result:
        return jsonify(result), 500

    return jsonify(result)
