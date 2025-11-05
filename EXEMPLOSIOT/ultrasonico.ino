
const int PINO_TRIG = 9; 
const int PINO_ECHO = 10; 
long duracao;      
float distanciaCm; 

void setup() {
  Serial.begin(9600); 
  pinMode(PINO_TRIG, OUTPUT); 
  pinMode(PINO_ECHO, INPUT);  
  
  Serial.println("Sensor HC-SR04 - Medidor de Distância");
}

void loop() {
  digitalWrite(PINO_TRIG, LOW);
  delayMicroseconds(2); 
  
  digitalWrite(PINO_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PINO_TRIG, LOW);
  
  duracao = pulseIn(PINO_ECHO, HIGH);

  distanciaCm = duracao * 0.0343 / 2;

  Serial.print("Distância: ");
  Serial.print(distanciaCm);
  Serial.println(" cm");

  delay(500); 
}