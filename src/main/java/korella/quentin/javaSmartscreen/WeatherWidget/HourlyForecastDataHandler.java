package korella.quentin.javaSmartscreen.WeatherWidget;

import java.io.FileWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.web.reactive.function.client.WebClient;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class HourlyForecastDataHandler {
  public static void saveHourlyForecastDataHandler() {
    Calendar cal = Calendar.getInstance();
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    Date currentDate = new Date();

    cal.setTime(currentDate);
    cal.add(Calendar.DATE, 1);
    Date futureDate = cal.getTime();

    double lat = 52.50;
    double lon = 9.46;
    String data = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm";
    String timeZone = "Europe/Berlin";

    String apiUrl = String.format(
        "https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&start_date=%s&end_date=%s&hourly=%s&timezone=%s",
        lat, lon, formatter.format(currentDate), formatter.format(futureDate), data, timeZone);

    WebClient webClient = WebClient.create();
    String responseBody = webClient.get()
        .uri(apiUrl)
        .retrieve()
        .bodyToMono(String.class).block();

    Gson gson = new GsonBuilder().create();

    String path = HourlyForecastDataHandler.class.getResource("/").getPath() + "User/Data/hourlyForecastData.json";

    HourlyForecastData myObjects = gson.fromJson(responseBody, HourlyForecastData.class);

    try (FileWriter fileWriter = new FileWriter(path)) {
      gson.toJson(myObjects, fileWriter);
    } catch (Exception e) {
      log.error(e.getMessage(), e);
    }
  }
}
