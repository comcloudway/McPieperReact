import React from 'react';
import {
 StyleSheet,
  ScrollView,
} from 'react-native';
import {COLORS} from '../assets/Colors.js'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Übersicht',
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
