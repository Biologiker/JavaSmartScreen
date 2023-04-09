package korella.quentin.javaSmartscreen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import de.codecentric.boot.admin.server.config.EnableAdminServer;

@SpringBootApplication
@EnableAdminServer
public class JavaSmartscreenApplication {

  public static void main(String[] args) {
    SpringApplication.run(JavaSmartscreenApplication.class, args);
  }

}
