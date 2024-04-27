import React, { createContext, useContext, useState, useEffect } from 'react';
import { Animated } from 'react-native';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDriving, setIsDriving] = useState(false);
  const [status, setStatus] = useState('green');
  const [findCarDisabled, setFindCarDisabled] = useState(true);
  const [message, setMessage] = useState('Not parked');

  const redLightOpacity = new Animated.Value(status === 'red' ? 1 : 0);
  const yellowLightOpacity = new Animated.Value(status === 'yellow' ? 1 : 0);
  const greenLightOpacity = new Animated.Value(status === 'green' ? 1 : 0);

  useEffect(() => {
    startSemaphoreAnimation();

    // Enable "Find my car" button when status is green
    setFindCarDisabled(status !== 'green');

    // Set message based on status
    if (status === 'green') {
      setMessage('Parked !');
      setIsDriving(true)
    } else if (status === 'red') {
      setMessage('Not Parked');
      setIsDriving(false)
    } else {
      setMessage('Parking ....');
      setIsDriving(false)
    }
  }, [status]);

  const startSemaphoreAnimation = () => {
    Animated.timing(redLightOpacity, {
      toValue: status === 'red' ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(yellowLightOpacity, {
      toValue: status === 'yellow' ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(greenLightOpacity, {
      toValue: status === 'green' ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LayoutContext.Provider value={{
      isFlipped, setIsFlipped,
      isDriving, setIsDriving,
      status, setStatus,
      findCarDisabled, message,
      redLightOpacity, yellowLightOpacity, greenLightOpacity
    }}>
      {children}
    </LayoutContext.Provider>
  );
};
