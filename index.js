
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const main=()=>
{
    console.log("hello world")
}
AppRegistry.registerComponent(appName, () => App);
