import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Linking } from 'react-native';

const { width } = Dimensions.get('window');
const itemSize = (width / 4) * 0.6;

const  Map= ({ markers, latitudeDelta, longitudeDelta }) => {
  const handleNavigation = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: markers.length > 0 ? markers[0].latitude : 0,
            longitude: markers.length > 0 ? markers[0].longitude : 0,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,

          }}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
              description={marker.description}
              image={marker.icon} 
            />
          ))}
        </MapView>
      
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
     backgroundColor: '#032370' 
,
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#3452',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#0000',
    borderRadius: 10,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SeparatorLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#00763d',
    marginTop: 10,
  },
  TextStyle: {
    color: '#00763d',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,  
    fontWeight: 'bold',  
  },
    listeningIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
  },
  listeningText: {
    color: 'red',
    fontSize: 18,
  },
});

export default Map;
