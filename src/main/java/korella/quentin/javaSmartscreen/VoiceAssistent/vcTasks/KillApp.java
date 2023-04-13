package korella.quentin.javaSmartscreen.VoiceAssistent.vcTasks;

import org.springframework.stereotype.Component;

import korella.quentin.javaSmartscreen.VoiceAssistent.ITask;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class KillApp implements ITask {

  @Override
  public void execute() {
    log.info("App gets Terminated");
    System.exit(0);
  }

  @Override
  public String getName() {
    return "kill";
  }
}
