from flask import Flask, jsonify
from flask_cors import CORS
import random
import requests

app = Flask(__name__)
CORS(app)

def sensorData():
    temperatura = round(random.uniform(20, 80), 2)
    umidade = round(random.uniform(30, 90), 2)
    presenca = random.randint(0, 1)
    tensao = round(random.uniform(180, 250), 2)

    return {
        "temperatura": temperatura,
        "umidade": umidade,
        "presenca": presenca,
        "tensao": tensao
    }

@app.route("/dados",methods=['GET'])
def dados():
    dados = sensorData()
    return jsonify(dados)



if __name__ == "__main__":
   app.run(host="0.0.0.0", port=5000)
