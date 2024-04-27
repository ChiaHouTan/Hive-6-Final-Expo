import React, { useState ,useEffect} from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Tts from 'react-native-tts';
import AppHeader from './AppHeader';
import { Linking } from 'react-native';
import useAudioPlayer from '../hooks/useAudioPlayer'; 
import useVoiceRecognition from '../hooks/useVoiceRecognition';
import usePermissions from '../hooks/usePermissions'; 
import useTextToSpeech from '../hooks/useTextToSpeech';
import { useLayout } from './LayoutContext';
const { width } = Dimensions.get('window');

const itemSize = (width / 4) * 0.6;

const MapScreen = ({ navigation }) => {
  const latitudeI = 53 + (58 / 60) + (56.30 / 3600);
  const longitudeI = -(6 + (23 / 60) + (31.96 / 3600));
  const [text, setText] = useState('');

  const { recognizedText, startListening ,isListening,stopListening,setRecognizedText} = useVoiceRecognition();
 const { speakText,ttsIsStopped } = useTextToSpeech();
  const { requestPermission, permissionStatus } = usePermissions();

  const playSound = useAudioPlayer();
const buttonPressSound="btn_press.wav"




useEffect(() => {
  console.log("Listening state: ", isListening);

}, [isListening]);

useEffect(() => {
  console.log("New recognized text:", recognizedText);

  // Here you can add any logic that should happen when recognizedText changes.
  // For example:
  if (recognizedText.toLowerCase().includes('yes')) {
    setText("Ok ")
   speakText(text)
    console.log("User said yes");
     setTimeout(() => {
      console.log("Navigating to Parking");
      
   

    handleNavigation(latitudeI,longitudeI)
    }, 500); // Delay navigation to test timing issue

  } else if (recognizedText.toLowerCase().includes('no') )  {
 
  
  setTimeout(() => {
      console.log("Navigating to Home");
      
   

    navigation.navigate("Home")
    }, 500); // Delay navigation to test timing issue
    console.log("User said no");
  }
  else{
    console.log("Nothing said")
  }

}, [recognizedText,text]);



const initiateInteraction = async () => {
  const hasPermission = await requestPermission('microphone');
  if (hasPermission) {
    speakText("Would you like to park ??")

   setTimeout(() => {
      startListening(); 
    }, 1500);
 
  } else {
    console.error('Microphone permission is required to proceed.');
  }
};
 const { isFlipped } = useLayout();

  const buttonContainerStyle = [
    styles.buttonContainer,
    { flexDirection: isFlipped ? 'row-reverse' : 'row' }
  ];

  return (
    <>   
      <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />

      <View style={styles.container}>

       
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitudeI,
            longitude: longitudeI,
            latitudeDelta: 0.000522,
            longitudeDelta: 0.000221,
          }}>
               
          <Marker
            coordinate={{ latitude: latitudeI, longitude: longitudeI }}
            title="Marker Title"
            description="Marker Description"
             image={require('../assets/images/marker1_64_64.png')} 
          />
        </MapView>
        <View style={buttonContainerStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../assets/images/home_50.png')}
              style={{ width: itemSize*0.2, height: itemSize*0.2, borderRadius: 10 }}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Home</Text>
          </TouchableOpacity>


               <TouchableOpacity onPress={() => speakText('There are 3 spaces available')}>
            <Image
              source={require('../assets/images/search_51.png')}
              style={{ width: itemSize*0.2, height: itemSize*0.2, borderRadius: 10 }}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => initiateInteraction ()}>
            <Image
              source={require('../assets/images/iparkitprologo5.png')}
              style={{ width: itemSize*0.2, height: itemSize*0.2, borderRadius: 10 }}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>iParkitPro</Text>
          </TouchableOpacity>



        </View>
      </View>
    </>
  );
};
const handleNavigation = (latitude, longitude) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
};




const styles = StyleSheet.create({
  container: {
     backgroundColor: '#032370' 
,
    flex: 1,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#3452',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#0000',
    borderRadius: 5,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SeparatorLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#00763d',
    marginTop: 10,
  },
  TextStyle: {
    color: '#00763d',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,  
    fontWeight: 'bold',  
  },
    listeningIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
  },
  listeningText: {
    color: 'red',
    fontSize: 18,
  },
});

export default MapScreen;
