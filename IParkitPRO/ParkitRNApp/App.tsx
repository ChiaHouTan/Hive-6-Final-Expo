/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import HomeScreen from './screens/HomeScreen'
import GridLayout from './screens/GridLayout'
import AboutUsScreen from './screens/AboutUsScreen'
import MapScreen from './screens/MapScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './screens/SettingsScreen'
import ProfileScreen from './screens/ProfileScreen'
import StatusScreen from './screens/StatusScreen'

import EVMapScreen from './screens/EVMapScreen'

import DisabilityMapScreen from './screens/DisabilityMapScreen'
import { LayoutProvider } from './screens/LayoutContext'
import LoginScreen from './screens/LoginScreen'
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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();




function App(): React.JSX.Element {


  return (
   <LayoutProvider>
          <NavigationContainer>{/*
           <Stack.Navigator initialRouteName="Login">*/}
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
  <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
  <Stack.Screen name="AboutUs" component={AboutUsScreen}   options={{ headerShown: false }} />
   <Stack.Screen name="GoogleMap" component={MapScreen}   options={{ headerShown: false }} />
    <Stack.Screen name="Grid" component={GridLayout}   options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen}   options={{ headerShown: false }} />
       <Stack.Screen name="Profile" component={ProfileScreen}   options={{ headerShown: false }} />
          <Stack.Screen name="Status" component={StatusScreen}   options={{ headerShown: false }} />
                   <Stack.Screen name="EVMap" component={EVMapScreen}   options={{ headerShown: false }} />
                   <Stack.Screen name="DisabilityMap" component={DisabilityMapScreen}   options={{ headerShown: false }} />
</Stack.Navigator>
</NavigationContainer>
  </LayoutProvider>
  );
}



export default App;
