import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import {COLORS} from '../assets/Colors.js'

export default function NotificationScreen() {
  return (
    <View>
      <Text>Benachrichtigung</Text>
    </View>
  );
}

NotificationScreen.navigationOptions = {
  title: 'Benachrichtigung',
  headerTintColor: COLORS.white,
  headerStyle: {
    backgroundColor: COLORS.primary,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
