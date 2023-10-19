import { StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'
import AppLayout from '../ReusableComponents/appLayout'
import CustomButton from '../ReusableComponents/customeButton'
import { COLOR_CODES } from '../utilities/globalVariables'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
const {width,height}=useWindowDimensions()
const navigation=useNavigation()
  return (
<AppLayout headerTitle={'Home'} ScreenText={'This is Home Screen, all main functionalities will be shown here. You can access the feature as per your subscribed pay plan'}>
<View style={{justifyContent:'center', alignItems:'center',marginVertical:height/100*20}}>
  <View style={{marginVertical:height/100*5}}>
    <CustomButton title={'Get Notification'} style={{width:width/100*50,backgroundColor:COLOR_CODES.charCoal}}/>
  </View>
  <View>
    <CustomButton onPress={()=>navigation.navigate('PaymentScreen')} title={'Pay Online'} style={{width:width/100*50,backgroundColor:COLOR_CODES.charCoal}}/>
  </View>
</View>
</AppLayout>
  )
}

export default Home

const styles = StyleSheet.create({})