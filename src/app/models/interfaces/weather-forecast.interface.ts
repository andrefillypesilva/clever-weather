// Interfaces
import { ConsolidatedWeather } from "./consolidated-weather.interface";
import { WeatherParent } from "./weather-parent.interface";
import { WeatherSource } from "./weather-source.interface";

export interface WeatherForecast {
  consolidated_weather: ConsolidatedWeather[],
  time: string,
  sun_rise: string,
  sun_set: string,
  timezone_name: string,
  parent: WeatherParent,
  sources: WeatherSource[],
  title: string,
  location_type: string,
  woeid: number,
  latt_long: string,
  timezone: string
}
