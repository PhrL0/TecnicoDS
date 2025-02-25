import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import IsolationForest

# 1. Gerando dados simulados (temperatura da máquina)
np.random.seed(42)
temperaturas_normais = np.random.uniform(20, 30, 100)  # Dados normais entre 20°C e 30°C
anomalias = np.array([5, 45, 50, 8])  # Dados anômalos (falhas)

# Concatenando dados normais e anômalos
dados = np.concatenate((temperaturas_normais, anomalias)).reshape(-1, 1)

# 2. Criando e treinando o modelo Isolation Forest
modelo = IsolationForest(contamination=0.05, random_state=42)  # 5% dos dados devem ser anomalias
modelo.fit(dados)

# 3. Fazendo previsões (1 = normal, -1 = anomalia)
previsoes = modelo.predict(dados)

# 4. Separando normais e anômalos para visualização
normais = dados[previsoes == 1]
anomalias_detectadas = dados[previsoes == -1]

# 5. Visualizando os resultados
plt.figure(figsize=(10, 5))
plt.hist(dados, bins=20, alpha=0.6, color='blue', label="Temperaturas")
plt.scatter(anomalias_detectadas, [1] * len(anomalias_detectadas), color='red', label="Anomalias", zorder=3)
plt.xlabel("Temperatura (°C)")
plt.ylabel("Frequência")
plt.legend()
plt.title("Detecção de Anomalias na Temperatura da Máquina")
plt.show()
