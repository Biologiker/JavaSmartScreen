package korella.quentin.javaSmartscreen.VoiceAssistent;

import java.io.File;
import java.io.InputStream;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;

import org.springframework.stereotype.Component;

@Component
public class PlaySound {
  public void play(InputStream inputStream, File file) {
    new Thread(() -> {
      try {
        AudioInputStream audioInputStream;
        Clip clip = AudioSystem.getClip();

        try {
          audioInputStream = AudioSystem.getAudioInputStream(file);
        } catch (Exception e) {
          audioInputStream = AudioSystem.getAudioInputStream(inputStream);
        }

        clip.open(audioInputStream);
        clip.start();

        float totalFrames = (float) (clip.getFrameLength() /
            clip.getFormat().getFrameRate());

        int timerLength = (int) Math.ceil(totalFrames * 1000);

        Thread.sleep(timerLength);

        audioInputStream.close();
        clip.close();
      } catch (Exception e) {
        System.err.println(e.getMessage());
      }
    }).start();
  }
}
