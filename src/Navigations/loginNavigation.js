import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import HomeNavigations from './homeNavigations';
import PaymentScreen from '../screens/paymentScreen';
import Register from '../screens/register';
const LoginNavigations=()=>
{
  console.log(":")
    const Stack = createNativeStackNavigator();
    return(  
        <Stack.Navigator
        initialRouteName={Login}
        screenOptions={{
          headerMode: 'screen',
          headerStyle: {},
        }}
    >
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false  }}  />
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false  }}  />
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false  }}  />
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false  }}  />
    {/* <Stack.Screen name="Home" component={HomeNavigations} options={{ headerShown: false  }}  /> */}
  </Stack.Navigator>)

}
export default LoginNavigations

