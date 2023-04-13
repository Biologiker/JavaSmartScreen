package korella.quentin.javaSmartscreen.VoiceAssistent;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import korella.quentin.javaSmartscreen.VoiceAssistent.vcTasks.UnknownTask;

@Component
@Configuration
public class TaskMapper {

  @Autowired
  private List<? extends ITask> tasks;

  @Autowired
  private UnknownTask unknownTask;

  public void vcCommand(String voiceCommand) {
    ITask iTask = this.tasks.stream()
        .filter(t -> t.getName()
            .equals(voiceCommand))
        .findFirst()
        .orElse(null);

    if (iTask == null) {
      unknownTask.execute();
    } else {
      iTask.execute();
    }

    SpeechToText.wakeWordDetected = false;
  }
}