import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import LoginNavigations from './src/Navigations/loginNavigation';
const App = () => {
  const Stack = createNativeStackNavigator();


  return ( 
      <NavigationContainer>
 <LoginNavigations/>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})