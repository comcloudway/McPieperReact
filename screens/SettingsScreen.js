import React from 'react';
import { ScrollView,
  StyleSheet, } from 'react-native';
import {COLORS} from '../assets/Colors.js'

export default function SettingsScreen() {
 return (
  <ScrollView style={styles.container}>
      
  </ScrollView>
 )
}

SettingsScreen.navigationOptions = {
  title: 'Einstellungen',
  headerTintColor: COLORS.white,
  headerStyle: {
    backgroundColor: COLORS.primary,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});