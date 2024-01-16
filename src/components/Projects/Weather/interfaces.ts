export interface WeatherData {
      coord: {
            lon: number;
            lat: number;
      },

      main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
      },

      wind: {
            speed: number;
      }

      sys: {
            country: string;
            sunrise: number;
            sunset: number;
      }
}