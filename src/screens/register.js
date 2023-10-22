import React, { useState } from 'react';
import { View, Text, ScrollView, useWindowDimensions,TouchableHighlight } from 'react-native';
import CustomTextInput from '../ReusableComponents/customisedTextInputComponnet';
import CustomButton from '../ReusableComponents/customeButton';
import AppLayout from '../ReusableComponents/appLayout';
import { COLOR_CODES } from '../utilities/globalVariables';
import { useNavigation } from '@react-navigation/native';
import { registerAPI } from '../../Services/registerService';
const Register = () => {
  const { height, width } = useWindowDimensions();
  const [number,setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const register = (number, password) => {
    console.log("dddd");
    registerAPI(number, password)
      .then(success => {
        console.log("success", success);
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  return (
    <AppLayout headerTitle="Register" ScreenText="Welcome! Please register to continue.">
      <ScrollView style={{ flex: 1 }}>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              height: height / 100 * 45,
              elevation: 1,
              marginVertical: height / 100*5,
              marginHorizontal: width / 100 * 4,
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '800' }}>Register</Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <CustomTextInput
                placeholder={'Enter your Number'}
                maxLength={11}
                value={number}
                onChangeText={(text) => setNumber(text)}
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <CustomTextInput
                placeholder={'Enter your Password'}
                maxLength={8}
                value={password}
                onChangeText={(t) => setPassword(t)}
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <CustomTextInput
                placeholder={'Confirm Password'}
                value={confirmPassword}
                onChangeText={(t) => setConfirmPassword(t)}
              />
            </View>
            <View style={{ marginVertical: height / 100 * 2 }}>
              <CustomButton
                onPress={() => register()}
                title={'Register'}
                style={{ backgroundColor: COLOR_CODES.charCoal, width: width / 100 * 50 }}
              />
            </View>
            <TouchableHighlight onPress={()=>navigation.navigate('Login')}>
              <Text style={{ textDecorationLine: 'underline', textDecorationColor: 'blue' }}>
                Already have an account? Login
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default Register;