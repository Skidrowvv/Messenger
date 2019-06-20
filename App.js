import React,{Component} from 'react';
import { createAppContainer, createStackNavigator,initialRouteName, StackActions, NavigationActions,createBottomTabNavigator  } from 'react-navigation';
import {Keyboard,Alert,StyleSheet,TouchableOpacity,Dimensions, Text, View,ImageBackground,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Profile from './component/profile/profile';

const {width:WIDTH} = Dimensions.get('window');


export default class Login extends Component{
  constructor(props){
    super(props)
    this.state ={
      showPass:true,
      press:false,
      username:'',
      password:''
    }
  }

  showPass = ()=>{
    if(this.state.press == false){
      this.setState({showPass:false,press:true})
    }else{
      this.setState({showPass:true,press:false})
    }
  }

  myValidate = () =>{
    const {username,password} = this.state;
    if(username == '' && password == ''){
        alert('Please fill Username and Password');
    }else if(username != 'admin' && password != '123'){
        alert('Account not found');
    }else if(username == 'admin' && password == ''){
        alert('Password Empty');
    }else if(username == '' && password != '123'){
        alert('Username not found');
    }else if(username == 'admin' && password == '123'){
        alert('Success');
    }
    Keyboard.dismiss()
}


  render(){
    return (
      
<ImageBackground source={require('./img/Group_3.png')} style={styles.backgroundContainer}>
          
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./img/logo2.png')} />
            <Text style={styles.logoText}>Welcome to Messenger</Text>
          </View>
  
          <View style={styles.inputContainer}>
            <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
              style={styles.inputIcon}
            />
  
            <TextInput 
            style={styles.input}
              placeholder={'Username'}
              placeholderTextColo={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={
                username=>this.setState({username})
            }
              />
          </View>
  
          
          <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon}
          />
  
            <TextInput 
            style={styles.input}
              placeholder={'Password'}
              secureTextEntry={this.state.showPass}
              placeholderTextColo={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={
                password=>this.setState({password})
            }
            />
  
          <TouchableOpacity style={styles.btnEye}>
              <Icon onPress={this.showPass.bind(this)} name={this.state.press == false ? 'ios-eye' :'ios-eye-off'}  size={26} color={'rgba(255,255,255,0.7)'}/>
          </TouchableOpacity>
          </View>
  
          <TouchableOpacity style={styles.btnLogin} onPress={this.myValidate}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
</ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:null,
    height:null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    alignItems:'center',
    marginBottom:50
  },
  logo:{
    width:120,
    height:120
  },
  logoText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    opacity:0.5
  },
  inputContainer:{
    marginTop:10,
    
  },
  input:{
    width:WIDTH - 55,
    height:45,
    borderRadius:45,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inputIcon:{
    position:'absolute',
    top:8,
    left:37,
  },
  btnEye:{
    position:'absolute',
    right:37,
    top:8
  },
  btnLogin:{
    width:WIDTH - 55,
    height:45,
    borderRadius:45,
    backgroundColor:'#ff2d55',
    justifyContent:'center',
    marginTop:20,
  },
  text:{
    color:'rgba(255,255,255,0.7 )',
    fontSize:16,
    textAlign:'center',
  }
});
