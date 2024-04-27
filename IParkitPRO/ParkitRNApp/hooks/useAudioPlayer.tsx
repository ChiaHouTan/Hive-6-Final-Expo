// useAudioPlayer.js
import { useCallback } from 'react';
import Sound from 'react-native-sound';

const useAudioPlayer = () => {

  const playSound = useCallback((fileName) => {
    const sound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
    
      sound.play((success) => {
        if (!success) {
          console.log('Failed to play the sound');
        }
        // Release the sound instance after playing
        sound.release();
      });
    });
  }, []);

  return playSound;
};

export default useAudioPlayer;
