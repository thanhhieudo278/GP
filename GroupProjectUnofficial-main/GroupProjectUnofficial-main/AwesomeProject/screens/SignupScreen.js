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
import { firebase } from '../firebase/config'

//component = function
function SignupScreen({navigation})
{
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate("SigninScreen")
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
    
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                //get data from server
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate("HomeScreen", {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
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

            }}> Create your account</Text>
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
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
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
                borderWidth: 2
                
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
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                   
                <View style={{flex:1}}/>       
            </View>

            
        </View>

        <View style={{        
            alignItems:'center',
            flex : 2,
            
        }}>
            <Text style={{
                
                color: "black",
                fontSize: 15,

            }}> Have an account?Sign in</Text>
        </View>

        <View style={{
            
            flex: 1,
            
        }}>
            <TouchableOpacity 
            onPress={() => onRegisterPress()}
            style={{ 
                backgroundColor: '#6666FF',
                borderRadius:20,
                height: 55,
                marginHorizontal: 50,
                marginVertical:5,
                justifycontent: 'center',
                alignItems: 'center',       
            }}>
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

export default SignupScreen