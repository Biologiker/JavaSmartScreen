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
public class DailyForecastDataHandler {
  public static void saveWeeklyForecastData() {
    Calendar cal = Calendar.getInstance();
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    Date currentDate = new Date();

    cal.setTime(currentDate);
    cal.add(Calendar.DATE, 14);
    Date futureDate = cal.getTime();

    double lat = 52.50;
    double lon = 9.46;
    String data = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration";
    String timeZone = "Europe/Berlin";

    String apiUrl = String.format(
        "https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&daily=%s&timezone=%s&start_date=%s&end_date=%s",
        lat, lon, data, timeZone, formatter.format(currentDate), formatter.format(futureDate));

    WebClient webClient = WebClient.create();
    String responseBody = webClient.get()
        .uri(apiUrl)
        .retrieve()
        .bodyToMono(String.class).block();

    Gson gson = new GsonBuilder().create();

    String path = DailyForecastDataHandler.class.getResource("/").getPath() + "User/Data/dailyForecastData.json";

    DailyForecastData myObjects = gson.fromJson(responseBody, DailyForecastData.class);

    try (FileWriter fileWriter = new FileWriter(path)) {
      gson.toJson(myObjects, fileWriter);
    } catch (Exception e) {
      log.error(e.getMessage(), e);
    }
  }
}