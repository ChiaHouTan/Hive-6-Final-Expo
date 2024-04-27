import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Sound from 'react-native-sound';
import AppHeader from './AppHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { useLayout } from './LayoutContext';


const StatusScreen = () => {

  const navigation = useNavigation();

    const {
    status, setStatus,
    setIsDriving,
    findCarDisabled, message,
    redLightOpacity, yellowLightOpacity, greenLightOpacity
  } = useLayout();

  const toggleStatus = () => {
    if (status === 'red') {
      playSound('error.wav');
      setStatus('yellow');
    } else if (status === 'yellow') {
      setStatus('green');
 
      playSound('parked.wav');
    } else {
      playSound('error.wav');
      setStatus('red');

    }
  };

  const playSound = (soundName) => {
    const sound = new Sound(soundName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Sound playback failed');
        }
        sound.release(); // Release the sound when done playing
      });
    });
  };

  const handGoBack = () => {
    navigation.navigate('Home');
  };

  const findMyCar = () => {
    navigation.navigate('GoogleMap');
  };

  return (
    <>
     <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
      <View style={styles.container}>
        <TouchableOpacity style={[styles.settingItem, { marginBottom: 100 }]} onPress={handGoBack}>
          <FontAwesome5 name="arrow-left" size={60} style={[styles.icon,{color:'#000000'}]} />
          <Text style={[styles.settingText,{color:'#000000',fontSize:30}]}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.animationContainer}>
          <Animated.View style={[styles.light, styles.redLight, { opacity: redLightOpacity }]} />
          <Animated.View style={[styles.light, styles.yellowLight, { opacity: yellowLightOpacity }]} />
          <Animated.View style={[styles.light, styles.greenLight, { opacity: greenLightOpacity }]} />
        </View>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleStatus}>
          <Text style={styles.toggleButtonText}>Test Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.findCarButton, { backgroundColor: findCarDisabled ? '#ccc' : '#007bff' }]}
          onPress={findMyCar}
          disabled={findCarDisabled}>
          <Text style={styles.findCarButtonText}>Find my car</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'left',
    backgroundColor: '#00bf63',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#740000'
  },
  animationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  light: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  redLight: {
    backgroundColor: 'red',
  },
  yellowLight: {
    backgroundColor: 'yellow',
  },
  greenLight: {
    backgroundColor: 'green',
  },
  toggleButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 18,
  },
  findCarButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  findCarButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default StatusScreen
