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

function MainScreen(props) 
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
            marginHorizontal:100,
            flex : 1,
            
        }}>
            <Text style={{
                
                color: "black",
                fontSize: 26,
                

            }}> Tell me more about yourself</Text>
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
                    placeholder= 'Enter age'
                    keyboardType='number-pad'
                    maxLength = {3}    
                />
                   
                <View style={{flex:1}}/> 
                  
                <Text style={{
                    marginEnd:20,
                    color: 'black',
                    fontSize:14,       
                }}>Your age</Text>                  
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
                    placeholder= 'Enter Gender'
                    keyboardType= 'default' 
                    maxLength = {6}    
                />
                   
                <View style={{flex:1}}/> 
                  
                <Text style={{
                    marginEnd:20,
                    color: 'black',
                    fontSize:14,       
                }}>Your Gender</Text>                  
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
                    placeholder= 'Enter Weight'
                    keyboardType= 'decimal-pad'
                    maxLength = {6}    
                />
                   
                <View style={{flex:1}}/> 
                  
                <Text style={{
                    marginEnd:20,
                    color: 'black',
                    fontSize:14,       
                }}>Your Weight</Text>                  
            </View>

            
        </View>
        
        <View style={{
            
            flex: 1,
            
        }}>
            <TouchableOpacity style={{
                
                backgroundColor: '#6666FF',
                borderRadius:20,
                height: 55,
                marginHorizontal: 50,
                marginVertical:20,
                justifycontent: 'center',
                alignItems: 'center',
                
                
            }}>
                <Text style={{
                    color: 'white',
                    fontSize:23,
                    marginVertical: 10,
                

                }}>Next
                </Text>

            </TouchableOpacity>

        </View>
       
    </View>    
}

export default MainScreen;