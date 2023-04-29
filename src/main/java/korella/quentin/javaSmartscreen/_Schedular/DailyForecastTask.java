package korella.quentin.javaSmartscreen._Schedular;

import java.util.TimerTask;

import korella.quentin.javaSmartscreen.WeatherWidget.DailyForecastDataHandler;

public class DailyForecastTask extends TimerTask {
  public void run() {
    DailyForecastDataHandler.saveWeeklyForecastData();
  }
}
