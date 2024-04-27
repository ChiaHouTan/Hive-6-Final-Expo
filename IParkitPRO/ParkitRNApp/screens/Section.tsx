import React from 'react';
import type {PropsWithChildren} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions
 
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section=({children, title}: SectionProps): React.JSX.Element =>{
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={
          styles.sectionDescription
        }>
        {children}
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    marginLeft:10,
    marginRight:10,
    paddingHorizontal: 24,
   
    backgroundColor:'#57c100',


  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
 
  },
  sectionDescription: {

    marginTop: 50,
    marginBottom: 50,
    fontSize: 18,
    fontWeight: '500',
    color:'#07390f'

  },
  highlight: {
    fontWeight: '100',
  }
});

export default Section;