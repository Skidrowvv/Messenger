import React from 'react';
import { StyleSheet,Switch,TouchableOpacity,Dimensions, Text, View,ImageBackground,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const {width:WIDTH} = Dimensions.get('window');


const Profile = ()=>{
    return(
    <ImageBackground source={require('../../img/bgLogin.png')} style={styles.backGround}>


        <View style={styles.header}>
            <Image source={require('../../img/Avatar.png')} style={styles.headerAvatar}/>
            <Text style={styles.headerText}>
                Artem Jhilinskiy
            </Text>
            <Text style={styles.location}>
                <Icon name={'md-pin'} size={24} color={'#fffd'}/>  Russia,Moscow
            </Text>
        </View>


    <View style={styles.headerSocialWeb}>


        <View style={styles.socialWeb}>
            <View style={styles.socialWebSub}>

            <TouchableOpacity>
            <Icon name={'md-paper'} size={40}  color="#ec4a66" style={styles.block}/>
                </TouchableOpacity>

                <TouchableOpacity>
            <Icon name={'ios-mail'} size={40}  color="#ec4a66" style={styles.block}/>
                </TouchableOpacity>

            </View>
        </View>


        <View style={styles.socialWeb}>
            <View style={styles.socialWebSub}>

            <TouchableOpacity>
            <Icon name={'ios-images'} size={40}  color="#008fd5" style={styles.block}/>
                </TouchableOpacity>

            <TouchableOpacity>
                <Icon name={'md-people'} size={40}  color="#008fd5" style={styles.block}/>
            </TouchableOpacity>

            </View>
        </View>


        <View style={styles.socialWeb}>
            <View style={styles.socialWebSub}>

            <TouchableOpacity>
                <Icon name={'ios-settings'} size={40}  color="#008fd5" style={styles.block}/>
            </TouchableOpacity>

                <TouchableOpacity>
            <Icon name={'ios-headset'} size={40}  color="#ec4a66" style={styles.block}/>
                </TouchableOpacity>

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
        height:240
    },
    header:{
        display:'flex',
        alignItems:'center',
        marginTop:35
    },
    headerAvatar:{
        width:140,
        height:140,
        borderRadius:100,
    },
    headerText:{
        color:'#fff',
        fontSize:17
    },
    location:{
        color:'#fffa',
        marginRight:10
    },
    socialWebSub:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:41,
        alignItems:'center',
    },
    socialWeb:{
        padding:10
    },
    headerSocialWeb:{
        marginTop:16,
        backgroundColor:'khaki',
        height:365
    }
    
})