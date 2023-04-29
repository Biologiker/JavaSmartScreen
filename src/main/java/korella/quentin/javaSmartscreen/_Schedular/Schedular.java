package korella.quentin.javaSmartscreen._Schedular;

import java.util.Timer;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
public class Schedular {
  private int hour = 60 * 60 * 1000;
  private int tenMinutes = 10 * 60 * 1000;

  public Schedular() {
    new Timer().scheduleAtFixedRate(new WeeklyForecastTask(), 0, tenMinutes);
  }
}
