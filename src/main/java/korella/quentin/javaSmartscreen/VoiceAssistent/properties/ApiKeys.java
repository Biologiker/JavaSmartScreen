package korella.quentin.javaSmartscreen.VoiceAssistent.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "vc.apikeys")
public class ApiKeys {

  private String ibmtts;

}
