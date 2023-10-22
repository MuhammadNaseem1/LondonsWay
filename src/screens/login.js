import {View, Text,ScrollView,TextInput,useWindowDimensions,TouchableHighlight} from 'react-native';
import CustomTextInput from '../ReusableComponents/customisedTextInputComponnet';
import {useState} from 'react'
import AppLayout from '../ReusableComponents/appLayout';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../ReusableComponents/customeButton';
import { COLOR_CODES } from '../utilities/globalVariables';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const {height,width}=useWindowDimensions()
  const [number,setNumber]=useState('')
  const [pass,setPass]=useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation=useNavigation()
  const toggleState=(value)=>
  {
    setToggleCheckBox(!toggleCheckBox)
  }
  
  return (
   <AppLayout headerTitle="Login" ScreenText="Hello! This is the login screen">
    <ScrollView style={{flex:1}}>
        <View>
          <View style={{justifyContent:'center',alignItems:'center', borderRadius:1,height:height/100*45,elevation:1,marginVertical:height/100,marginHorizontal:width/100*4}}>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'800'}}>
              Login
            </Text>
          </View>
           <View style={{marginVertical:5,}}>
            <CustomTextInput placeholder={"Enter your Number Please"}
            value={number}
            onChangeText={(text)=>
            setNumber(text)
            }
            />
           </View>
           <View style={{marginVertical:5}}>
            <CustomTextInput placeholder={"Enter your Password Please"}
            value={pass}
            onChangeText={(t)=>{
              setPass(t)
            }}
            />
           </View>
           <View style={{marginRight:width/100*20,flexDirection:'row'}}>
          <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => toggleState(newValue)}
  />
  
  <Text style={{justifyContent:'center',marginTop:5}}>Remember Me</Text>
          </View>
          <View style={{marginVertical:height/100*2}}>
              <CustomButton onPress={()=>navigation.navigate('Home')} title={'Login'} style={{backgroundColor:COLOR_CODES.charCoal,width:width/100*50}}/>
          </View>
          <TouchableHighlight onPress={()=>navigation.navigate('Register')}>
            <Text style={{ textDecorationLine:'underline',
    textDecorationColor: 'blue'}}>
              Register
            </Text>
          </TouchableHighlight>
          </View>
        
          </View>     
    </ScrollView>

   </AppLayout>
  );
};

export default Login;
