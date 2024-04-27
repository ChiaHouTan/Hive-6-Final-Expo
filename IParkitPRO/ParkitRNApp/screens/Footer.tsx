import React from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLayout } from './LayoutContext';
const Footer = () => {
  const windowWidth = useWindowDimensions().width;
  const isSmallScreen = windowWidth < 600; // Adjust the threshold based on your tablet's screen size

  return (
    <View style={[styles.footer, isSmallScreen && styles.smallScreen]}>
      <Text style={styles.footerText}>Disclaimer: This app is for College Project purposes</Text>
      <Text style={styles.footerText}>Legal Notices: All rights reserved. Unauthorized or authorized use is encouraged for testing purposes</Text>
      <Text style={styles.footerText}>&copy; 2024 HIVE6 Inc. All rights reserved.</Text>
      <View style={styles.socialIcons}>
        <Icon name="facebook" size={24} color="blue" style={styles.icon} />
        <Icon name="twitter" size={24} color="skyblue" style={styles.icon} />
        <Icon name="instagram" size={24} color="purple" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#669999',
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    height: 200,
    marginTop:2,
    
  },
  footerText: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  smallScreen: {
    height: 300, // Adjust the height for small screens
  },
});

export default Footer;
