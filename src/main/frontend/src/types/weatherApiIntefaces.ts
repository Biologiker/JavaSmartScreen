export interface weeklyForecastData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    sunrise: string;
    sunset: string;
    uv_index_max: string;
    uv_index_clear_sky_max: string;
    precipitation_sum: string;
    rain_sum: string;
    showers_sum: string;
    snowfall_sum: string;
    precipitation_hours: string;
    precipitation_probability_max: string;
    windspeed_10m_max: string;
    windgusts_10m_max: string;
    winddirection_10m_dominant: string;
    shortwave_radiation_sum: string;
    et0_fao_evapotranspiration: string;
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: string[];
    windspeed_10m_max: string[];
    windgusts_10m_max: string[];
    winddirection_10m_dominant: string[];
    shortwave_radiation_sum: string[];
    et0_fao_evapotranspiration: string[];
  };
}

export interface hourlyForecastData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    rain: string;
    snowfall: string;
    snow_depth: string;
    weathercode: string;
    visibility: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    rain: number[];
    snowfall: number[];
    snow_depth: number[];
    weathercode: number[];
    visibility: number[];
  };
}
