import React,{Component} from 'react';
import { createAppContainer, createStackNavigator,initialRouteName, StackActions, NavigationActions,createBottomTabNavigator  } from 'react-navigation';
import { StyleSheet,TouchableOpacity,Dimensions, Text, View,ImageBackground,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Profile from './component/profile/profile'


const {width:WIDTH} = Dimensions.get('window');

myValidate = () =>{
  const {username,password} = this.state;
    if(username == '' && password == ''){
      alert('Please fill username and password');
    }else if(username != 'admin' && passowrd != 'admin'){
      alert('Account not found');
    }else if(username == 'admin' && passowrd == ''){
      alert('Password Empty');
    }else if(username == '' && passowrd != 'admin'){
      alert('Username not found');
    }else if(username == 'admin' && passowrd == 'admin'){
      alert('Success');
    }
}


export default class Login extends Component{
  constructor(){
    super()
    this.state ={
      showPass:true,
      press:false
    }
  }

  showPass = ()=>{
    if(this.state.press == false){
      this.setState({showPass:false,press:true})
    }else{
      this.setState({showPass:true,press:false})
    }
  }

render(){
  return <Profile/>
}
}