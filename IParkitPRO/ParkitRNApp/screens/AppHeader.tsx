import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import UserTesting from './UserTesting';

const AppHeader = ({ title, imageUrl }) => {
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(Dimensions.get('window').width > Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscription?.remove();
    };
  }, []);

  const dynamicStyles = StyleSheet.create({
    header: {
      backgroundColor: '#032370', // Dark blue
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      height: isLandscape ? Dimensions.get('window').height * 0.2 : Dimensions.get('window').height * 0.2,
      width: isLandscape ? Dimensions.get('window').width * 0.4 : Dimensions.get('window').width * 0.5,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 10
    },
    title: {
      color: 'green',
      fontSize: isLandscape ? 14 : 10,
      fontWeight: 'bold'
    }
  });

  return (
    <View style={dynamicStyles.header}>
      <Image source={imageUrl } style={dynamicStyles.logo} />
      <UserTesting />
      <Text style={dynamicStyles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;
