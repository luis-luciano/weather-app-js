export class Weather {
    

  constructor(city, countryCode) {
    this.apiKey = '0ccbb4d2dd5664f355fd2b6504ba2ce9';
    this.setLocation(city,countryCode);
    
    const id = document.getElementById.bind(document);
  }

  setLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }

  isDataEmpty() { 
    return this.city === null && this.countryCode === null;
  }

  // Se utiliza async para poder utilizar await
  async getWeather() {
    if(this.isDataEmpty()) {
      return;
    }

    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;

    // Se utiliza fetch sin necesidad de usar JQuery o alguna libreria para hacer peticiones
    // Para indicar que necesita tomar tiempo para la respuesta usando await
    const response = await fetch(URI);
    
    // Convierte la respuesta en json esperando la conversion con await
    return await response.json();
  }
}
