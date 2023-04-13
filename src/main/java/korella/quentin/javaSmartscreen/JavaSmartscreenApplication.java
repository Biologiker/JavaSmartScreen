package korella.quentin.javaSmartscreen;

import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import de.codecentric.boot.admin.server.config.EnableAdminServer;

@SpringBootApplication
@EnableAdminServer
public class JavaSmartscreenApplication {

  public static ArrayList<String> WakeWords = new ArrayList<String>();

  public static void main(String[] args) {
    SpringApplication.run(JavaSmartscreenApplication.class, args);

    WakeWords.add("smartscreen");
    WakeWords.add("jarvis");
    WakeWords.add("computer");
    WakeWords.add("sam");
  }
}
