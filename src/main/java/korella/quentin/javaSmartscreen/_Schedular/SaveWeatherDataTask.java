package korella.quentin.javaSmartscreen._Schedular;

import java.util.TimerTask;

import korella.quentin.javaSmartscreen.WeatherWidget.DailyForecastDataHandler;
import korella.quentin.javaSmartscreen.WeatherWidget.HourlyForecastDataHandler;

public class SaveWeatherDataTask extends TimerTask {
  public void run() {
    DailyForecastDataHandler.saveWeeklyForecastData();
    HourlyForecastDataHandler.saveHourlyForecastDataHandler();
  }
}
