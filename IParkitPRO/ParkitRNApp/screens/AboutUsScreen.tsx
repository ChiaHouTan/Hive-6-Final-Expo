import React ,{useState}from 'react';
import type {PropsWithChildren} from 'react';
import Section from './Section'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from './AppHeader';
import{ ImageAssets } from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome'; //
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Footer from './Footer'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions

} from 'react-native/Libraries/NewAppScreen';

import Sound from 'react-native-sound';


const AboutUsScreen=({ navigation })=> {
    const handleGoBack = () => {
    navigation.navigate("Home");
  };

const aboutUsSound = "hawkins.wav"; 
  // Define a function to play the sound and navigate after a delay
Sound.setCategory('Playback');
  const playAboutUs = () => {
    // Load the sound file
    const sound = new Sound(aboutUsSound ,Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      // Play the sound
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
          // After a short delay (e.g., 1 second), navigate to another screen
/*          setTimeout(() => {
            navigation.navigate('Home'); // Navigate to the 'Home' screen
          }, 1000); */
        } else {
          console.log('Sound playback failed');
        }
        // Release the sound when done playing
        sound.release();
      });
    });
  };


  return (
    <>     
    <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
   <View style={styles.space} /> 
     <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
        <FontAwesome5 name="arrow-left" size={60}  style={{color:'#000000',marginLeft: 20}} />
        <Text  style={{color:'#010d03',marginLeft: 20,fontSize:30}}>Back  </Text>
      </TouchableOpacity>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
              <Section title="About Us" >
             

What is this App? Helping people find the nearest car park space !? I hate to break it to you, Hive 6, but the 
the world was doing just fine before your app came along.Ha,Ha !

 <View style={styles.space} /> 
<TouchableHighlight onPress={playAboutUs}>
     <View>
      
                <Icon name="music" size={44} color="#000000"  />
      <Text style={styles.text}>About Us</Text>
     </View>
 </TouchableHighlight>

          {/*Google Map Test button*/}

 <View style={styles.space} /> 
          </Section>
    {/*Back Home button*/}


        <View>
             
     <TouchableOpacity   onPress={() => navigation.navigate('GoogleMap')}>
    <Image
     source={require('../assets/images/parking_btn.png')}
      
    />
    <View style={styles.SeparatorLine} />
    <Text style={styles.TextStyle}> Find parking</Text>

</TouchableOpacity>
    </View>

      {/*Test sound button*/}


  
    </View>
 {/*   <Footer/>*/}
  </>
  );
}

const styles = StyleSheet.create({
 
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})

export default AboutUsScreen;