import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './Screens/WriteStoryScreen'
import ReadStoryScreen from './Screens/ReadStoryScreens'

export default class App extends React.Component{
  render(){
    return (
     <Appcontainer/>
  );
}
}
const Tabnavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory:ReadStoryScreen
}, 
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon: ()=>{
    const routeName =navigation.state.routeName
    if(routeName === "WriteStory"){
      return(
        <Image
        source = {require("./assets/write.png")}
        style = {{width: 40, height: 40}}
        />
      )
    }
    else if(routeName === "ReadStory"){
      return(
        <Image
        source = {require("./assets/read.png")}
        style = {{width: 40, height: 40}}
        />
      )
    }
  }
})
}
)
const Appcontainer = createAppContainer(Tabnavigator)