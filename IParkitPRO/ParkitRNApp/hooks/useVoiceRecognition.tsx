import React,{ useState, useCallback,useEffect } from 'react';
import Voice from '@react-native-voice/voice';

const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  const startListening = useCallback(() => {
    setIsListening(true);
  
    Voice.start('en-US').then(() => {
      console.log("Voice recognition started");
 

    }).catch(e => {
      console.error("Failed to start voice recognition", e);
      setIsListening(false);
    });
  }, []);

  const stopListening = useCallback(() => {
    Voice.stop().then(() => {
      setIsListening(false);
      console.log(recognizedText)
    }).catch(e => {
      console.error("Failed to stop voice recognition", e);
    });
  }, []);

  // Listen for results
  useEffect(() => {
    const onSpeechResults = (event) => {
      setRecognizedText(event.value ? event.value[0] : '');
    };

    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return { recognizedText, isListening, startListening, stopListening,setRecognizedText };
};

export default useVoiceRecognition;
