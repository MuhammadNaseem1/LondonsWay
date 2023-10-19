import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';

const HomeNavigations = () => {
  const Stack = createNativeStackNavigator();

  return (
 
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false  }}  />
  )
}

export default HomeNavigations

const styles = StyleSheet.create({})