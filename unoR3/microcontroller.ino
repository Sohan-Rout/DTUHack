#define TRIG_PIN 9   // Trig pin of HC-SR04
#define ECHO_PIN 10  // Echo pin of HC-SR04

// LED Pins
int ledPins[] = {2, 3, 4, 5, 6}; // LEDs connected to digital pins 2-6
const int numLeds = 5;

void setup() {
    pinMode(TRIG_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);
    
    // Set LED pins as OUTPUT
    for (int i = 0; i < numLeds; i++) {
        pinMode(ledPins[i], OUTPUT);
    }

    Serial.begin(9600); // Start serial communication
}

void loop() {
    long duration;
    int distance;

    // Send ultrasonic pulse
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(3);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(13);
    digitalWrite(TRIG_PIN, LOW);

    // Read the echo response
    duration = pulseIn(ECHO_PIN, HIGH);
    distance = duration * 0.034 / 2; // Convert to cm

    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");

    // LED Indicator Logic
    if (distance < 10) {
        lightUpLeds(5);  // All LEDs ON
    } else if (distance < 20) {
        lightUpLeds(4);
    } else if (distance < 30) {
        lightUpLeds(3);
    } else if (distance < 40) {
        lightUpLeds(2);
    } else if (distance < 50) {
        lightUpLeds(1);
    } else {
        lightUpLeds(0);  // All LEDs OFF
    }

    delay(500);
}

// Function to control LED indicators
void lightUpLeds(int ledCount) {
    for (int i = 0; i < numLeds; i++) {
        if (i < ledCount) {
            digitalWrite(ledPins[i], HIGH);
        } else {
            digitalWrite(ledPins[i], LOW);
        }
    }
}