package korella.quentin.javaSmartscreen._Schedular;

import java.util.Date;
import java.util.TimerTask;

import org.springframework.beans.factory.annotation.Autowired;

import korella.quentin.javaSmartscreen.WeatherWidget.WeeklyForecastDataHandler;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class WeeklyForecastTask extends TimerTask {
  @Autowired
  private WeeklyForecastDataHandler weeklyForecastDataHandler;

  public void run() {
    log.info(Long.toString(new Date().getTime()));
    weeklyForecastDataHandler.saveWeeklyForecastData();
  }
}
