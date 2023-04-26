package korella.quentin.javaSmartscreen.VoiceAssistent;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.LineUnavailableException;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import edu.cmu.sphinx.api.LiveSpeechRecognizer;
import edu.cmu.sphinx.api.SpeechResult;
import korella.quentin.javaSmartscreen.JavaSmartscreenApplication;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Configuration
public class SpeechToText implements InitializingBean {

  private Clip clip;

  public SpeechToText() throws LineUnavailableException {
    this.clip = AudioSystem.getClip();
  }

  public static Boolean wakeWordDetected = false;
  public static String vcCommand;

  @Autowired
  private TaskMapper getTaskFromText;

  @Autowired
  private PlaySound playSound;

  @Override
  public void afterPropertiesSet() throws Exception {
    edu.cmu.sphinx.api.Configuration config = new edu.cmu.sphinx.api.Configuration();

    config.setAcousticModelPath("resource:/voiceAssistent/acoustics/germanAcoustic");
    config.setDictionaryPath("resource:/voiceAssistent/dictonarys/german.dic");
    config.setLanguageModelPath("resource:/voiceAssistent/languageModels/german.lm.bin");

    config.setGrammarPath("resource:/voiceAssistent/grammar");
    config.setGrammarName("grammar");
    config.setUseGrammar(true);

    new Thread(() -> {
      try {
        LiveSpeechRecognizer speechRecognizer = new LiveSpeechRecognizer(config);

        speechRecognizer.startRecognition(true);

        SpeechResult speechResult = null;

        while ((speechResult = speechRecognizer.getResult()) != null) {
          String voiceCommand = speechResult.getHypothesis();

          if (!wakeWordDetected) {
            wakeWordDetected = checkForWakeword(voiceCommand);
          } else {
            getTaskFromText.vcCommand(voiceCommand);
          }
        }
      } catch (IOException e) {
        log.error("error", e);
      }
    }).start();
  }

  public Boolean checkForWakeword(String voiceCommand) {
    for (String wakeWord : JavaSmartscreenApplication.WakeWords) {
      if (voiceCommand.contains(wakeWord)) {
        playSound.play(null, new File(getClass().getResource("/").getPath() + "recStart1.wav"));
        return true;
      }
    }

    return false;
  }
}
