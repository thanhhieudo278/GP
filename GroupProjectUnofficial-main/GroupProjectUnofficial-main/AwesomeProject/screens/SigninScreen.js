import React, { useState } from 'react';
import{
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    
} from 'react-native';
import { Directions, TextInput } from 'react-native-gesture-handler';
import { Size } from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import { firebase } from '../firebase/config.js'

//component = function
function SigninScreen({navigation})
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate("SignupScreen")
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            
            .then((response) => {
                //if match then return user information
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate("HomeScreen",  /*{user: user}*/)
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return <View style=
    {{
        backgroundColor: '#F0F8FF',
        flex: 1
        
    }}>
        <View style={{
            
            flex:1
        }}></View>

        <View style={{        
            alignItems: 'center',   
            marginHorizontal:1,
            flex : 1,
            
        }}>
            <Text style={{
                
                color: "black",
                fontSize: 35,

            }}> Sign In</Text>
        </View>

        <View style={{
            
            flex:4
        }}>
            <View style={{
                flexDirection: 'row',
                flexWrap: "wrap",
                backgroundColor: '#FFFFFF',
                borderRadius:10,
                marginHorizontal:20,
                marginVertical:20,
                height: 60,
                alignItems: 'center',
                borderColor: '#6666FF',
                borderWidth: 2
                
            }}>                                    
                <TextInput style={{
                    marginLeft:20,
                    fontSize:25,                
                }}
                    
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"  
                    
                />
                   
                <View style={{flex:1}}/> 
                                    
            </View>

            <View style={{
                flexDirection: 'row',
                flexWrap: "wrap",
                backgroundColor: '#FFFFFF',
                borderRadius:10,
                marginHorizontal:20,
                marginVertical:20,
                height: 60,
                alignItems: 'center',
                borderColor: '#6666FF',
                borderWidth: 2,
                
            }}>                                    
                <TextInput style={{
                    marginLeft:20,
                    fontSize:25,
                    
                }}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"

                />
                   
                <View style={{flex:1}}/>       
            </View>

            
        </View>

        <View style={{        
            alignItems:'center',
            flex : 5,
            
        }}>
            <Text style={{
                
                color: "black",
                fontSize: 15,

            }}> Don't have an account? <Text onPress={onFooterLinkPress}>Sign up</Text></Text>
        </View>

        <View style={{
            
            flex: 2,
            
        }}>
            <TouchableOpacity
                style={{               
                backgroundColor: '#6666FF',
                borderRadius:20,
                height: 55,
                marginHorizontal: 50,
                marginVertical:20,
                justifycontent: 'center',
                alignItems: 'center',
                }}
                onPress={() => onLoginPress()}>
                
                <Text style={{
                    color: 'white',
                    fontSize:23,
                    marginVertical: 10,
                }}>Login
                </Text>

            </TouchableOpacity>

        </View>
        
       
    </View>    
}

export default SigninScreen