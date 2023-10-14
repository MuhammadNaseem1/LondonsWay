import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home';
const HomeNavigations = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Screen name="Home" component={Home} />
    
  )
}

export default HomeNavigations

const styles = StyleSheet.create({})