import { useCallback, useEffect, useState } from 'react';
import Tts from 'react-native-tts';
import usePermissions from './usePermissions';

const useTextToSpeech = () => {
    const { requestPermission } = usePermissions();
    const [ttsIsStopped, setTtsIsStopped] = useState(false);
   Tts.setDefaultLanguage('en-UK');

    const handleTtsFinish = useCallback((event) => {
        if (event.utteranceId === 'queryPrompt') {
            console.log("TTS finished speaking.");
            setTtsIsStopped(true); // Update ttsIsStopped when TTS finishes speaking
        }
    }, []);

    useEffect(() => {
        Tts.addEventListener('tts-finish', handleTtsFinish);

        return () => {
            Tts.removeEventListener('tts-finish', handleTtsFinish);
            Tts.stop(); // Clean up TTS when the component unmounts
        };
    }, [handleTtsFinish]);

    const speakText = useCallback(async (message) => {
        const hasPermission = await requestPermission('microphone');
        if (!hasPermission) {
            console.log("Microphone permission denied.");
            return;
        }

        setTtsIsStopped(false); 
        Tts.getInitStatus().then(()=>Tts.speak(message, {
            androidParams: {
                KEY_PARAM_UTTERANCE_ID: 'queryPrompt',
            },
        }));
    }, [requestPermission]);

    return { speakText, ttsIsStopped };
};

export default useTextToSpeech;
