import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Intro from './components/Intro'
import Phonic from './components/Phonic'

export default class App extends Component{
render(){
return(
  <View>
  
  <AppContainer/>
  </View>
)


}

}
var AppNavigator=createSwitchNavigator({
  Intro:Intro,
  Phonic:Phonic
})
const AppContainer=createAppContainer(AppNavigator)