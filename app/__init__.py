from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1>Deploy feito a partir do GitHub!</h1>"