package korella.quentin.javaSmartscreen.VoiceAssistent;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.ibm.cloud.sdk.core.security.IamAuthenticator;
import com.ibm.watson.text_to_speech.v1.model.SynthesizeOptions;
import com.ibm.watson.text_to_speech.v1.util.WaveUtils;

import korella.quentin.javaSmartscreen.VoiceAssistent.properties.ApiKeys;

@Component
@Configuration
public class TextToSpeech {

  @Autowired
  private ApiKeys apiKeys;

  @Autowired
  private PlaySound playSound;

  public void getSpeechFromText(String text) {
    // String femaleGermanVoice = "de-DE_ErikaV3Voice";
    String maleGermanVoice = "de-DE_DieterV3Voice";

    String apiUrl = "https://api.eu-de.text-to-speech.watson.cloud.ibm.com";

    String apiKey = apiKeys.getIbmtts();

    IamAuthenticator authenticator = new IamAuthenticator(apiKey);
    com.ibm.watson.text_to_speech.v1.TextToSpeech textToSpeech = new com.ibm.watson.text_to_speech.v1.TextToSpeech(
        authenticator);
    textToSpeech.setServiceUrl(apiUrl);

    try {
      SynthesizeOptions synthesizeOptions = new SynthesizeOptions.Builder()
          .text(text)
          .accept("audio/wav")
          .voice(maleGermanVoice)
          .build();

      InputStream inputStream = textToSpeech.synthesize(synthesizeOptions).execute().getResult();
      InputStream in = WaveUtils.reWriteWaveHeader(inputStream);

      playSound.play(in, null);

      in.close();
      inputStream.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
