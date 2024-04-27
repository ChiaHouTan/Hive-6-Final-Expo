import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLayout } from '../LayoutContext';
const DisableWhileDrivingModal = ({ visible, onClose }) => {

const  {toggleLayout ,setIsDriving,isFlipped,setIsFlipped} = useLayout();
  const message = "This action will modify the  interface to  eliminate distractions,\n and enhance focus on DRIVING";
const handleDirectionLayout=()=>{
    console.log("theme")
    setIsFlipped(!isFlipped)

}

  const handleDisableWhileDriving = () => {
    console.log("disable while driving")
    //setModalVisibleDWD(true)
    setIsDriving()
    onClose()
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Disabling Buttons While Diving</Text>
         <Text  style={styles.itemText}>{message}</Text>
            <Text style={styles.itemText}>Do you want to proceed</Text>
   <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={()=>handleDisableWhileDriving()}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>onClose()}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
          </View>
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
   
  button: {
    margin:20,
    marginTop: 20,

    padding: 10,
    elevation: 6,
    borderRadius: 20,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    fontSize:20,
       color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }

});

export default DisableWhileDrivingModal;
