import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button ,  SafeAreaView,
  ScrollView,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader'
import Footer from './Footer'
import { useLayout } from './LayoutContext';
import useAudioPlayer from '../hooks/useAudioPlayer'; 
import EVInfoModal from './modals/EVInfoModal';
import DisableWhileDrivingModal from './modals/DisableWhileDrivingModal';

import CarParkPolicyModal from './modals/CarParkPolicyModal'
import AboutModal from './modals/AboutModal'
import ChangeLayoutDirectionModal from './modals/ChangeLayoutDirectionModal'
import FutureModal from './modals/FutureModal'

const SettingsScreen = () => {
 const  {toggleLayout ,setIsDriving,isFlipped,setIsFlipped} = useLayout();

 const [modalVisibleEV, setModalVisibleEV] = useState(false);

 const [modalVisibleDWD, setModalVisibleDWD] = useState(false);
const [modalVisiblePolicy,setModalVisiblePolicy]=useState(false);
const[modalVisibleDirection,setModalVisibleDirection]=useState(false);

const[modalVisibleAbout,setModalVisibleAbout]=useState(false);

const[modalVisibleFuture,setModalVisibleFuture]=useState(false);

   const navigation = useNavigation();

  const handleThemeChange = () => {

  };
const handleDirectionLayout=()=>{
    console.log("theme")
    //setIsFlipped(!isFlipped)
    setModalVisibleDirection(true)

}
const handlePolicy=()=>{

setModalVisiblePolicy(true);
}
  const handleDisableWhileDriving = () => {
    console.log("disable while driving")
    setModalVisibleDWD(true)

  };


  const handleClearParkingHistory = () => {
    // Implement logic to clear parking history
  };

  const handleAddHomeLocation = () => {
    // Implement logic to add home location
  };

  const handleAboutApp = () => {
setModalVisibleAbout(true);
  };
  const handleGoBack=()=>{
           navigation.navigate("Home");
  }
    const handleSoundSettings=()=>{
           navigation.navigate("Home");
  }
  const handleEVInfo=()=>{
      setModalVisibleEV(true);
  }
    const handleFutureModal=()=>{
    setModalVisibleFuture(true)
  }

  const playSound = useAudioPlayer();

  const playAudioAcknowledgment = () => {


  // Load the audio file
  
const buttonPressSound="btn_press.wav"


   playSound(buttonPressSound); 
};




  return (
    <>
       <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />

      <ScrollView>

    <View style={styles.container}>
          <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
        <FontAwesome5 name="arrow-left" size={60}  style={styles.icon} />
        <Text style={styles.settingText}>Back  </Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleEVInfo(); }, 600); }}>
        <FontAwesome5 name="plug" size={24}  style={{color:"red" , padding:10,
    marginRight: 10,}} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>EV Charging</Text>
      </TouchableOpacity>


         <EVInfoModal
        visible={modalVisibleEV}
        onClose={() => setModalVisibleEV(false)}
      />
       
       <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleDisableWhileDriving(); }, 600); }}>
        <FontAwesome5 name="car" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Driving Mode</Text>
                 <DisableWhileDrivingModal
        visible={modalVisibleDWD}
        onClose={() => setModalVisibleDWD(false)}
      />
      </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleDirectionLayout(); }, 600); }}>
        <FontAwesome5 name="exchange-alt" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}> {isFlipped ? 'Right Hand Drive Layout' : 'Left Hand Drive Layout'}</Text>
                         < ChangeLayoutDirectionModal
        visible={modalVisibleDirection}
        onClose={() => setModalVisibleDirection(false)}
      />
      </TouchableOpacity>


         <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handlePolicy(); }, 600); }}>
        <FontAwesome5 name="parking" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>DKIT Car Park Policy</Text>
                    < CarParkPolicyModal
        visible={modalVisiblePolicy}
        onClose={() => setModalVisiblePolicy(false)}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleAboutApp(); }, 600); }}>
        <FontAwesome5 name="info" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text  style={styles.settingText}>About App</Text>
                 < AboutModal
        visible={modalVisibleAbout}
        onClose={() => setModalVisibleAbout(false)}
      />
      </TouchableOpacity>

 <View style={{flex: 1, borderStyle:'dashed' ,borderColor: 'green',borderWidth: 5}}/>


      <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleFutureModal();}, 600); }}>
        <FontAwesome5 name="history" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Parking History</Text>
             < FutureModal
        visible={modalVisibleFuture}
        onClose={() => setModalVisibleFuture(false)}
      />
      </TouchableOpacity>
   
             <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleFutureModal(); }, 600); }}>
        <FontAwesome5 name="music" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Audio </Text>
             < FutureModal
        visible={modalVisibleFuture}
        onClose={() => setModalVisibleFuture(false)}
      />
      </TouchableOpacity>


      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleFutureModal(); }, 600); }}>
        <FontAwesome5 name="wheelchair" size={24} style={{color:"blue" , padding:10,
    marginRight: 10,}}/>
         <View style={styles.underline} />
        <Text style={styles.settingText}>Disabled Spaces</Text>
           < FutureModal
        visible={modalVisibleFuture}
        onClose={() => setModalVisibleFuture(false)}
      />
      </TouchableOpacity>



      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => {handleFutureModal(); }, 600); }}>
        <FontAwesome5 name="palette" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Theme</Text>
             < FutureModal
        visible={modalVisibleFuture}
        onClose={() => setModalVisibleFuture(false)}
      />


      </TouchableOpacity>


    </View>

</ScrollView>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#50cf92', 
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

  },
  icon: {
    padding:10,
    marginRight: 10,
    color:'#3a0000'
  },
 settingText: {
    fontSize: 20, 
    marginLeft: 10,
    color: '#060000',
  },
    underline: {
  backgroundColor: '#760000',
    height: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,
  },
});

export default SettingsScreen;
