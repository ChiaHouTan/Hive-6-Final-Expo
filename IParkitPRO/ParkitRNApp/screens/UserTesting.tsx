import React from 'react';
import { TouchableOpacity, Text, Linking,StyleSheet } from 'react-native';

const UserTesting = () => {
    const openForm = () => {
        const url = 'https://docs.google.com/forms/d/e/1FAIpQLScuSrDlGx22ZSsRLk31TsN5EMjX62JDNkerWimsyO2cGOwbqA/viewform?usp=sf_link';
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };

    return (
        <TouchableOpacity onPress={openForm} style={styles.button}>
            <Text style={styles.text}>User Feedback</Text>
        </TouchableOpacity>
    );
};

export default UserTesting;


const styles = StyleSheet.create({
    button: {
        marginTop: '80',
        padding: 2,
        backgroundColor: '#d1951c',
        borderRadius:10, 
        borderWidth: 1, 
        borderColor: 'white'
    },
    text: {
        padding:10,
        color: '#0a011b',
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'bold'
    }
});