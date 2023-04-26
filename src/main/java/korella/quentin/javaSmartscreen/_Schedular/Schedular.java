package korella.quentin.javaSmartscreen._Schedular;

import java.util.Timer;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Configuration
public class Schedular {
  public Schedular() {
    new Timer().scheduleAtFixedRate(new WeeklyForecastTask(), 0, 1000);
  }
}
