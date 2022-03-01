import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/mainScreen';
import ContextProvider from './contexts/contextProvider';

export default function App() {
  return (
    <ContextProvider>
      <MainScreen />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
