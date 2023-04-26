package korella.quentin.javaSmartscreen.WeatherWidget;

public class DailyForecastData {
  Double latitude;
  Double longitude;
  Double generationtime_ms;
  Integer utc_offset_seconds;
  String timezone;
  String timezone_abbreviation;
  Double elevation;
  DailyUnits daily_units;
  DailyData daily;

  public class DailyUnits {
    String time;
    String weathercode;
    String temperature_2m_max;
    String temperature_2m_min;
    String apparent_temperature_max;
    String apparent_temperature_min;
    String sunrise;
    String sunset;
    String uv_index_max;
    String uv_index_clear_sky_max;
    String precipitation_sum;
    String rain_sum;
    String showers_sum;
    String snowfall_sum;
    String precipitation_hours;
    String precipitation_probability_max;
    String windspeed_10m_max;
    String windgusts_10m_max;
    String winddirection_10m_dominant;
    String shortwave_radiation_sum;
    String et0_fao_evapotranspiration;
  }

  public static class DailyData {
    String[] time;
    Integer[] weathercode;
    Double[] temperature_2m_max;
    Double[] temperature_2m_min;
    Double[] apparent_temperature_max;
    Double[] apparent_temperature_min;
    String[] sunrise;
    String[] sunset;
    Double[] uv_index_max;
    Double[] uv_index_clear_sky_max;
    Double[] precipitation_sum;
    Double[] rain_sum;
    Double[] showers_sum;
    Double[] snowfall_sum;
    Double[] precipitation_hours;
    Integer[] precipitation_probability_max;
    Double[] windspeed_10m_max;
    Double[] windgusts_10m_max;
    Double[] winddirection_10m_dominant;
    Double[] shortwave_radiation_sum;
    Double[] et0_fao_evapotranspiration;
  }
}