import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader';
import AccountDetailsModal from './modals/AccountDetails';
import Sound from 'react-native-sound';

const { width } = Dimensions.get('window'); // Get the width of the device

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
const [details, setDetails] = useState({
  name: 'The Guy With The Band',
  email: 'iparkitpro@email.com',
});


  const handleGoBack = () => {
    navigation.navigate("Home");
  };
    const handleLogout = () => {
    navigation.navigate("Login");
  };

  const playAudioAcknowledgment = () => {
    const buttonPressSound = "btn_press.wav";
    const buttonSound = new Sound(buttonPressSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      // Play the audio
      buttonSound.play((success) => {
        if (!success) {
          console.log('Failed to play the sound');
        }
        buttonSound.release();
      });
    });
  };

  return (
    <>
      <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
      <ScrollView style={{ flex: 1,    backgroundColor: '#50cf92', }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
            <FontAwesome5 name="arrow-left" size={60} style={styles.icon} />
            <Text style={styles.settingText}>Back</Text>
          </TouchableOpacity>
               <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
          setTimeout(() => { setModalVisible(true); }, 600); }}>
  
            <FontAwesome5 name="user" size={24} style={styles.icon} />
            <Text style={styles.settingText}>Account Details</Text>
            <FontAwesome5 name="info" size={16} style={styles.plusIcon} />
              <View style={styles.underline} />
          </TouchableOpacity>

          <AccountDetailsModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={setDetails}  
          details={details}
          />
          <View style={styles.profileContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.nameEmailText}>Name: {details.name}</Text>
              <Text style={styles.nameEmailText}>Email: {details.email}</Text>
            </View>
            <Image
              style={styles.profileImage}
              source={require('../assets/images/Ovi_pic.png')} // Update the correct path to your image file
            />
          </View>
                   <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
          setTimeout(() => { handleLogout(); }, 600); }}>
  
            <FontAwesome5 name="sign-out-alt" size={24} style={styles.icon} />
            <Text style={styles.settingText}>Sign out</Text>
            <FontAwesome5 name="info" size={16} style={styles.plusIcon} />
              <View style={styles.underline} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#50cf92',
    
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',

  },
  icon: {
    marginRight: 10,
    color: '#440000',
  },
  settingText: {
    fontSize: 20,
    color: '#060000',
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  nameEmailText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#032370',
  },
  profileImage: {
    width: width * 0.4, 
    height: width * 0.4,

  },
  plusIcon: {
    marginRight: 10,
  },
  underline: {
    backgroundColor: '#060000',
    height: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,
  },
});

export default ProfileScreen;
