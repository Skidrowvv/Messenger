
export default class Login extends Component{
  constructor(props){
    super(props)
    this.state ={
      showPass:true,
      press:false,
      fname:'',
      lname:''
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
    const {fname,lname} = this.state;
    if(fname == '' && lname == ''){
        alert('Please fill fname and lname');
    }else if(fname != 'admin' && lname != 'admin'){
        alert('Account not found');
    }else if(fname == 'admin' && lname == ''){
        alert('Password Empty');
    }else if(fname == '' && lname != 'admin'){
        alert('Username not found');
    }else if(fname == 'admin' && lname == 'admin'){
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
                lname=>this.setState({lname})
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
                fname=>this.setState({fname})
            }
            />
  
          <TouchableOpacity style={styles.btnEye}>
              <Icon onPress={this.showPass.bind(this)} name={this.state.press == false ? 'ios-eye' :'ios-eye-off'}  size={26} color={'rgba(255,255,255,0.7)'}/>
          </TouchableOpacity>
          </View>
  
          
          <TouchableOpacity 
                onPress={this.myFun}
                style={{backgroundColor:'red',padding:10,width:150}}>
                    <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Submit</Text>
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




-------
Simple Validit

myValidate = () =>{
  const {fname,lname} = this.state;
  if(fname == '' && lname == ''){
      alert('Please fill fname and lname');
  }else if(fname != 'admin' && lname != 'admin'){
      alert('Account not found');
  }else if(fname == 'admin' && lname == ''){
      alert('Password Empty');
  }else if(fname == '' && lname != 'admin'){
      alert('Username not found');
  }else if(fname == 'admin' && lname == 'admin'){
      alert('Success');
  }
  Keyboard.dismiss()
}



----LOGIN

<TouchableOpacity style={styles.btnLogin} onPress={this.myFun}>
  <Text style={styles.text}>Login</Text>
</TouchableOpacity>