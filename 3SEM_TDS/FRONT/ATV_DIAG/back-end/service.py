import random
import json
def sensorData():
    temperatura = round(random.uniform(20,80),2)
    umidade = round(random.uniform(30,90),2)
    presenca = random.randint(0, 1)

    dados = {
        "temperatura":temperatura,
        "umidade":umidade,
        "presenca": presenca
    }

    jsonString = json.dumps(dados)

    return  jsonString


print(sensorData())