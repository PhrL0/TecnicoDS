#include <ezButton.h>

#define CLK_PIN 25 // ESP32 pin GPIO25
#define DT_PIN  26 // ESP32 pin GPIO26
#define SW_PIN  27 // ESP32 pin GPIO27

#define DIRECTION_CW  0
#define DIRECTION_CCW 1

// Variáveis atualizadas pela interrupção DEVEM ser "volatile"
// Isso impede que o compilador faça otimizações que possam quebrar a lógica.
volatile int counter = 0;
volatile int direction = DIRECTION_CW;
volatile unsigned long lastTime = 0; // Para debouncing do encoder

ezButton button(SW_PIN);

// Esta é a Função de Serviço de Interrupção (ISR)
// Ela precisa ser o mais rápida possível.
// IRAM_ATTR diz ao ESP32 para carregar esta função na RAM para execução ultra-rápida.
void IRAM_ATTR readEncoder() {
  // Simples debounce por software: ignora pulsos muito próximos
  if (micros() - lastTime < 1000) { // 1ms = 1000 microsegundos
    return;
  }
  lastTime = micros();

  // A lógica é a mesma, mas agora acontece "fora" do loop
  if (digitalRead(DT_PIN) == HIGH) {
    counter--;
    direction = DIRECTION_CCW;
  } else {
    counter++;
    direction = DIRECTION_CW;
  }
}

void setup() {
  Serial.begin(9600);

  // Configura os pinos
  pinMode(CLK_PIN, INPUT);
  pinMode(DT_PIN, INPUT);
  button.setDebounceTime(50); // Debounce do botão

  // Anexa a interrupção ao pino CLK
  // A função readEncoder() será chamada toda vez que o CLK_PIN for de LOW para HIGH (RISING)
  attachInterrupt(digitalPinToInterrupt(CLK_PIN), readEncoder, RISING);

  Serial.println("Encoder pronto. Use interrupções.");
}

void loop() {
  // O loop do botão DEVE ser chamado aqui
  button.loop();

  // Variáveis para armazenar o último estado e evitar spam no Serial
  static int lastCounter = 0;
  static int lastDirection = 0;

  // Verifica se o contador mudou
  if (counter != lastCounter) {
    Serial.print("Rotary Encoder:: direction: ");
    if (direction == DIRECTION_CW)
      Serial.print("Clockwise");
    else
      Serial.print("Counter-clockwise");

    Serial.print(" - count: ");
    Serial.println(counter);

    // Atualiza o último estado
    lastCounter = counter;
    lastDirection = direction;
  }

  // O loop principal continua verificando o botão
  if (button.isPressed()) {
    Serial.println("O botão foi pressionado");
    // Exemplo: Resetar o contador ao pressionar
    // counter = 0; 
  }

  // Você pode adicionar qualquer outro código aqui (WiFi, MQTT, etc.)
  // e o encoder continuará funcionando perfeitamente.
}