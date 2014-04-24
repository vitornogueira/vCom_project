int ledPin = 13; // Porta do LED embutido no Arduino UNO
char valor;
void setup()
{
  Serial.begin(9600); // Iniciando a porta serial
  pinMode(ledPin, OUTPUT); // Iniciando a porta do LED
}

void loop()
{
  if(Serial.available() > 0) {  // Se a porta estiver disponível ...
    valor = Serial.read();
    Serial.print(valor);
    if(valor == 'a'){
      digitalWrite(ledPin, HIGH);
    }
    if(valor == 'b'){
      digitalWrite(ledPin, LOW);
    }
      
  }
 
  
}
  
   


