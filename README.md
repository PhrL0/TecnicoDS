senha supababse: SGdzy8XDKrimA0tc

/*
 * Código C++ (para Arduino/ESP32) para ler a temperatura
 * do sensor digital DS18B20.
 */
 
#include <OneWire.h>
#include <DallasTemperature.h>

// --- Definição do Pino ---
// Defina qual pino digital está conectado ao pino DATA do sensor
const int ONE_WIRE_BUS_PIN = 46; // Exemplo: D4 no ESP32 ou pino 4 no Arduino

// --- Configuração das Bibliotecas ---
// Cria uma instância "oneWire" para o pino especificado
OneWire oneWire(ONE_WIRE_BUS_PIN);

// Passa a referência "oneWire" para a biblioteca DallasTemperature
DallasTemperature sensors(&oneWire);

void setup() {
  // Inicia a comunicação serial
  Serial.begin(115200);
  Serial.println("Leitor de Temperatura DS18B20");
  
  // Inicia a biblioteca do sensor
  sensors.begin();
}

void loop() {
  // --- Passo 1: Solicitar as leituras de temperatura ---
  // Envia o comando para todos os sensores no barramento
  sensors.requestTemperatures(); 
  
  // Aguarda um momento para a conversão ser concluída
  // O tempo de espera depende da resolução (padrão é 12-bit = 750ms)
  // Mas a biblioteca gerencia isso se esperarmos após a solicitação.
  
  // --- Passo 2: Ler a temperatura ---
  // getTempCByIndex(0) lê o primeiro sensor (índice 0) no barramento.
  // Se você tiver múltiplos sensores, pode usar os índices 1, 2, etc.
  float temperaturaC = sensors.getTempCByIndex(0);

  // --- Passo 3: Exibir o Resultado ---
  
  // Verifica se o sensor retornou um valor inválido (ex: -127)
  if (temperaturaC == DEVICE_DISCONNECTED_C) {
    Serial.println("Erro: Não foi possível ler o sensor!");
  } else {
    Serial.print("Temperatura: ");
    Serial.print(temperaturaC);
    Serial.println(" °C");
  }

  // Aguarda 2 segundos antes da próxima leitura
  delay(2000);
}

