import React, { useState } from 'react';

import { View, TextInput, Button, StyleSheet, Alert,TouchableOpacity,Text,Image ,Dimensions,ScrollView} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppHeader from './AppHeader';

import WarningModal from '../screens/modals/WarningModal'

const LoginScreen = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

   const navigation = useNavigation();
  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {

              setAlertMessage('DO NOT USE THIS APP WHILE DRIVING!\n\n\n\n'+
                'Please enter username and password!');
      setAlertVisible(true);

    } else {
      setAlertMessage('DO NOT USE THIS APP WHILE DRIVING!\n\n\n'+
        'DO NOT USE THIS APP WHILE DRIVING!\n\n\n'+
        'DO NOT USE THIS APP WHILE DRIVING!');
      setAlertVisible(true);

    
 
  
    }
  }
  const handleOnClose=()=>{

      setAlertVisible(false);
      if (username.trim() && password.trim()) {
      navigation.navigate("Home");
    }

  };

  return (
    <>
      <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
         <ScrollView style={{backgroundColor: '#50cf92',}}>
    <View style={styles.container}>
             
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
            <Text style={styles.buttonTextClose}>Login</Text>
          </TouchableOpacity>

             <WarningModal
        visible={alertVisible}
        message={alertMessage}
        onClose={() => {handleOnClose()}}
      />
      </View>
    </View>
       </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#50cf92', 
  },
  input: {
    height: 40,
    width: '60%', 
    marginBottom: 12,
    borderWidth: 2,
    padding: 10,
    fontSize: 16, 
    marginLeft: 10,
    color: '#060000',
     borderRadius: 10,
  },
  buttonContainer: {
    
    marginTop: 10,
  },
    button: {
    margin:20,
    marginTop: 20,


    padding: 10,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: '#2196F3',
  },
  buttonText: {
        color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

});
export default LoginScreen;
