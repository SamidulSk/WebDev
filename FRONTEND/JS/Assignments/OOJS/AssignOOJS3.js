class Temperature {
    constructor() {
        this.celsius = 0;
        this.fahrenheit = 32;
    }

    get getCelsius() {
        return this.celsius;
    }

    get getFahrenheit() {
        return this.fahrenheit;
    }

    set setCelsius(celTemp) {
        this.celsius = celTemp;
        this.fahrenheit = (celTemp * 9/5) + 32; 
    }

    set setFahrenheit(FahrTemp) {
        this.fahrenheit = FahrTemp;
        this.celsius = (FahrTemp - 32) * 5/9; 
    }
}

const temperature = new Temperature();
console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setCelsius = 25;
console.log(`Updated Celsius: ${temperature.getCelsius}°C`);
console.log(`Updated Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setFahrenheit = 68;
console.log(`Updated Celsius: ${temperature.getCelsius}°C`);
console.log(`Updated Fahrenheit: ${temperature.getFahrenheit}°F`);
