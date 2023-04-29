package korella.quentin.javaSmartscreen.WeatherWidget;

import java.util.ArrayList;

public class HourlyForecastData {
  double latitude;
  double longitude;
  double generationtime_ms;
  int utc_offset_seconds;
  String timezone;
  String timezone_abbreviation;
  double elevation;
  HourlyUnits hourly_units;
  Hourly hourly;

  public class Hourly {
    ArrayList<String> time;
    ArrayList<Double> temperature_2m;
    ArrayList<Integer> relativehumidity_2m;
    ArrayList<Double> dewpoint_2m;
    ArrayList<Double> apparent_temperature;
    ArrayList<Integer> precipitation_probability;
    ArrayList<Double> precipitation;
    ArrayList<Double> rain;
    ArrayList<Double> showers;
    ArrayList<Double> snowfall;
    ArrayList<Double> snow_depth;
    ArrayList<Integer> weathercode;
    ArrayList<Double> pressure_msl;
    ArrayList<Double> surface_pressure;
    ArrayList<Integer> cloudcover;
    ArrayList<Integer> cloudcover_low;
    ArrayList<Integer> cloudcover_mid;
    ArrayList<Integer> cloudcover_high;
    ArrayList<Double> visibility;
    ArrayList<Double> evapotranspiration;
    ArrayList<Double> et0_fao_evapotranspiration;
    ArrayList<Double> vapor_pressure_deficit;
    ArrayList<Double> windspeed_10m;
    ArrayList<Double> windspeed_80m;
    ArrayList<Double> windspeed_120m;
    ArrayList<Double> windspeed_180m;
    ArrayList<Integer> winddirection_10m;
    ArrayList<Integer> winddirection_80m;
    ArrayList<Integer> winddirection_120m;
    ArrayList<Integer> winddirection_180m;
    ArrayList<Double> windgusts_10m;
    ArrayList<Double> temperature_80m;
    ArrayList<Double> temperature_120m;
    ArrayList<Double> temperature_180m;
    ArrayList<Double> soil_temperature_0cm;
    ArrayList<Double> soil_temperature_6cm;
    ArrayList<Double> soil_temperature_18cm;
    ArrayList<Double> soil_temperature_54cm;
    ArrayList<Double> soil_moisture_0_1cm;
    ArrayList<Double> soil_moisture_1_3cm;
    ArrayList<Double> soil_moisture_3_9cm;
    ArrayList<Double> soil_moisture_9_27cm;
    ArrayList<Double> soil_moisture_27_81cm;
  }

  public class HourlyUnits {
    String time;
    String temperature_2m;
    String relativehumidity_2m;
    String dewpoint_2m;
    String apparent_temperature;
    String precipitation_probability;
    String precipitation;
    String rain;
    String showers;
    String snowfall;
    String snow_depth;
    String weathercode;
    String pressure_msl;
    String surface_pressure;
    String cloudcover;
    String cloudcover_low;
    String cloudcover_mid;
    String cloudcover_high;
    String visibility;
    String evapotranspiration;
    String et0_fao_evapotranspiration;
    String vapor_pressure_deficit;
    String windspeed_10m;
    String windspeed_80m;
    String windspeed_120m;
    String windspeed_180m;
    String winddirection_10m;
    String winddirection_80m;
    String winddirection_120m;
    String winddirection_180m;
    String windgusts_10m;
    String temperature_80m;
    String temperature_120m;
    String temperature_180m;
    String soil_temperature_0cm;
    String soil_temperature_6cm;
    String soil_temperature_18cm;
    String soil_temperature_54cm;
    String soil_moisture_0_1cm;
    String soil_moisture_1_3cm;
    String soil_moisture_3_9cm;
    String soil_moisture_9_27cm;
    String soil_moisture_27_81cm;
  }
}