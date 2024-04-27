import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,  ScrollView} from 'react-native';

const AboutModal = ({ visible, onClose }) => {


 
     const about = [
"About Applicattion",
"Using AI technology, to detect empty car park spaces.",
"College: DKIT",
"Year: 4",
"Programme: Software Development",
"Developed by : Ovi [The Guy with the band]",
"Dublin 2024",


  
      
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
 <ScrollView>
              <Text style={styles.warning}>DO NOT USE THIS APP WHILE DRIVING !!!</Text>
          <Text style={styles.modalText}>Important Information</Text>
          {about.map((item, index) => (
            <Text key={index} style={styles.itemText}>{item}</Text>
          ))}
          <TouchableOpacity style={styles.button} onPress={onClose}>

            <Text style={styles.buttonText}>OK.</Text>

          </TouchableOpacity>
    
 </ScrollView>
        </View>
             
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50cf92', // Updated background color
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color:'#182d05'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    paddingBottom:20,
    elevation: 2,
    borderRadius: 20

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  warning:{
    fontSize:26,
    color:'yellow',
    backgroundColor:"black",
    paddingTop:20,
    paddingLeft:30,
    padding:10,
    borderRadius:10

  }
});

export default AboutModal;
