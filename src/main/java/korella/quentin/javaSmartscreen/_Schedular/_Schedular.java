package korella.quentin.javaSmartscreen._Schedular;

import java.util.Timer;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
public class _Schedular {
  private int hour = 60 * 60 * 1000;
  private int tenMinutes = 10 * 60 * 1000;

  public _Schedular() {
    new Timer().scheduleAtFixedRate(new SaveWeatherDataTask(), 0, tenMinutes);
  }
}
