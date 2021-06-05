import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,Button } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Loginscreen from './LoginScreen';
import Signup from './SignupScreen';
import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  
  render(){
  return (
    <View style={styles.container}>
       <AppContainer/>
    </View>
  );
}
}
const navigator= createBottomTabNavigator({
  Login:{screen:Loginscreen},
  Signup:{screen:Signup},
})
const switchnavigatar= createSwitchNavigator({
  Login:{screen:Loginscreen},
  Signup:{screen:Signup},
  Home:{screen:HomeScreen},
  
})
const AppContainer = createAppContainer(switchnavigatar)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#fff',
  },
});
