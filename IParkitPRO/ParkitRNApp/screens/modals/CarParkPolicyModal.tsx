import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

const CarParkPolicyModal = ({ visible, onClose }) => {


 
     const policy = [
"IMPORTANT:The new car parking policy is as follows",
"1): Park only in marked parking spaces and entirely within the space as marked.",
"2): Do not park elsewhere.",
"3): Any car that is not parked in a designated car parking space is liable to be clamped.",
"4): The unclamping fee is €60.",
"5): From 1st September 2008 a proportion of spaces at the Institute will be subject to a Pay & Display rate of 30c/hour or €2/day or €8/week.",
"6): Any car not displaying a valid pay and display ticket is liable to be clamped. The payment of a daily or weekly rate does not guarantee a space.",
"7): Other terms and conditions are set out in the FAQ Car parking (i.e. this document).",
"link :https://www.dkit.ie/assets/uploads/documents/FAQ/DkIT_Car_Parking_FAQ.pdf"
  
      
  ];

  return (
    <>


    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
                <ScrollView>
          <Text style={styles.modalText}>Important Information</Text>
          {policy.map((item, index) => (
            <Text key={index} style={styles.itemText}>{item}</Text>
          ))}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
           </ScrollView>
        </View>
         

      </View>
    </Modal>

  </>
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
    elevation: 2,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default CarParkPolicyModal;
