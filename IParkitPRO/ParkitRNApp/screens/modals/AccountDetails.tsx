import React, { useState,useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const AccountDetailsModal = ({ visible, onClose, onSave, details }) => {
  const [localDetails, setLocalDetails] = useState(details);

  const handleSave = () => {
      onSave(localDetails);  // Pass the updated details back up
      onClose();

  };

    useEffect(() => {
    setLocalDetails(details);
  }, [details]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Edit Account Details</Text>
          
          <Text style={styles.label}>Name:</Text>
          <TextInput
       style={styles.input}
            onChangeText={(text) => setLocalDetails({ ...localDetails, name: text })}
            value={localDetails.name}
            placeholder="Name"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLocalDetails({ ...localDetails, email: text })}
            value={localDetails.email}
            placeholder="Email"
          />

          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>handleSave()}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>onClose()}>
            <Text style={styles.buttonText}>Close</Text>
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
    backgroundColor: '#50cf92', // Updated background color
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
    elevation: 5,
    width: '60%' 
  },
  modalTitle: {
      color: '#182d05',

    marginBottom: 15,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold'
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 25,
    color: '#182d05',
    marginBottom: 5
  },
  input: {
     color: '#182d05',
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
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

export default AccountDetailsModal;
