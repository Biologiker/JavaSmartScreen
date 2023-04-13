package korella.quentin.javaSmartscreen.VoiceAssistent.vcTasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import korella.quentin.javaSmartscreen.VoiceAssistent.ITask;
import korella.quentin.javaSmartscreen.VoiceAssistent.TextToSpeech;

@Component
public class UnknownTask implements ITask {

  @Autowired
  private TextToSpeech textToSpeech;

  @Override
  public void execute() {
    String text = "Unbekannte Aufgabe!";

    textToSpeech.getSpeechFromText(text);
  }

  @Override
  public String getName() {
    return "unknownTask";
  }
}
