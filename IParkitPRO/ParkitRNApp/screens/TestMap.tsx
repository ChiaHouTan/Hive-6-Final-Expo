// Usage example in another component
import React from 'react';
import { View } from 'react-native';
import Map from './Map';

const TestMap = () => {
  const markers = [
    { latitude: 53.982967, longitude: -6.391983, title: 'EV Point', description: 'EV charge Point' },
      { latitude: 53.982974, longitude: -6.39195, title: 'EV Point', description: 'EV charge Point' }
    // Add more markers as needed
  ];

  return (
    <View style={{ flex: 1 }}>
      <Map markers={markers} 
    latitudeDelta={ 0.000522}
            longitudeDelta={ 0.000221}
      />
    </View>
  );
};

export default TestMap;
