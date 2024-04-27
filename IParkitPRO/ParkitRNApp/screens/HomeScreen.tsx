import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, useColorScheme } from 'react-native';
import AppHeader from './AppHeader';
import GridLayout from './GridLayout';
import Footer from './Footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
          <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flexGrow: 1 }}
          style={{  backgroundColor: '#032370'}}>
          <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
       
            <GridLayout />
       
          </View>
        </ScrollView>
      {/*  <Footer />*/}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
      padding: 10,
        backgroundColor: '#032370' 
  },
});

export default HomeScreen;
