import React from 'react';
import{
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    
} from 'react-native';
import { Directions, TextInput } from 'react-native-gesture-handler';
import { Size } from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
//component = function
function SignupScreen(props)
{
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
                    placeholder= 'Username'
                    keyboardType='number-pad'
                    maxLength = {3}    
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
                    placeholder= 'E-mail'
                    keyboardType= 'default' 
                    maxLength = {6}    
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
                    placeholder= 'Password'
                    keyboardType= 'decimal-pad'
                    maxLength = {6}    
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
            <TouchableOpacity style={{
                
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