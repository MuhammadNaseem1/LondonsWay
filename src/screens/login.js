import {View, Text,ScrollView,TextInput,useWindowDimensions} from 'react-native';
import CustomTextInput from '../ReusableComponents/customisedTextInputComponnet';
import {useState} from 'react'
import AppLayout from '../ReusableComponents/appLayout';
const Login = () => {
  const {height,width}=useWindowDimensions()
  const [number,setNumber]=useState('')
  return (
   <AppLayout headerTitle="Login" ScreenText="Hello! This is the login screen">
    <ScrollView style={{flex:1}}>
        <View>
          <View style={{justifyContent:'center',alignItems:'center', borderRadius:1,height:height/100*30,elevation:1,marginVertical:height/100*2,marginHorizontal:width/100*4}}>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'800'}}>
              Login
            </Text>
          </View>
           <View style={{marginVertical:5,}}>
            <CustomTextInput placeholder={"Enter your Number Please"}
            />
           </View>
           <View style={{marginVertical:5,}}>
            <CustomTextInput placeholder={"Enter your Password Please"}
            />
           </View>
          </View>
          
          </View>     
    </ScrollView>

   </AppLayout>
  );
};

export default Login;
