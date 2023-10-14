import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import HomeNavigations from './homeNavigations';
const LoginNavigations=()=>
{
  console.log(":")
    const Stack = createNativeStackNavigator();
    return(    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={HomeNavigations} />
    {/* <Stack.Screen name="Home" component={ScreenComponent2} /> */}
  </Stack.Navigator>)

}
export default LoginNavigations

