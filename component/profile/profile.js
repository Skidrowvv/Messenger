import React from 'react';
import { StyleSheet,TouchableOpacity,Dimensions, Text, View,ImageBackground,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const {width:WIDTH} = Dimensions.get('window');


const Profile = ()=>{
    return(
    <ImageBackground source={require('../../img/bgLogin.png')} style={styles.backGround}>



        <View>
                <View style={styles.profileHeader}>
                    <TouchableOpacity onPress={()=>alert('Menu')}>
                        <Icon name={'ios-menu'}  size={40} color={'rgba(255,255,255,0.7)'}/>
                    </TouchableOpacity>
                        <Text style={styles.profileText}>Profile</Text>
                    <TouchableOpacity onPress={()=>alert('Settings')}>
                        <Icon name={'ios-settings'}  size={40} color={'rgba(255,255,255,0.7)'}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.avatarContainer}>
                <TouchableOpacity onPress={()=>alert('Insta')}>
                    <Icon name={'logo-instagram'}  size={40} color={'#ec4a66'}/>
                </TouchableOpacity>
                
                <Image source={require('../../img/Avatar.png')} style={styles.avatar}/>
                    
                <TouchableOpacity onPress={()=>alert('Vk')}>
                    <Icon name={'logo-vk'}  size={40} color={'#4a76a8'}/>
                </TouchableOpacity>
                </View>

                <View style={styles.aboutMe}>
                    <Text>Username</Text>
                    <View style={styles.inputContainer}>
                        <Icon name={'ios-person'} size={21} color={'red'}style={styles.inputIcon}/>
                            <TextInput 
                            style={styles.input}
                            placeholder={'Username'}
                            placeholderTextColo={'rgba(255,255,255,0.4)'}
                            underlineColorAndroid='transparent'
                            />
                    </View>
            <View style={styles.inputContainer}>
                <Icon name={'ios-lock'} size={21} color={'red'} style={styles.inputIcon}/>
                <Text>Password</Text>
                
            <TextInput 
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={false}
                placeholderTextColo={'rgba(255,255,255,0.4)'}
                underlineColorAndroid='transparent'/>
        </View>
                </View>
        </View>

        
        
    </ImageBackground>
    )
}

export default Profile

const styles = StyleSheet.create({
    backGround:{
        width:WIDTH,
        height:255,
    },
    profileHeader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:20
    },
    profileText:{
        fontSize:22,
        color:'#fff'
    },
    avatar:{
        width:140,
        height:140,
        borderRadius:25,
    },
    inputContainer:{
        marginTop:10,
        
    },
    input:{
        width:WIDTH - 55,
        height:25,
        borderRadius:45,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color:'rgba(255,255,255,0.7)',
        marginHorizontal:25
    },
    inputIcon:{
        position:'absolute',
        top:2,
        left:37,
    },
    avatarContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        paddingTop:125,
    },
    aboutMe:{
        
    }
})