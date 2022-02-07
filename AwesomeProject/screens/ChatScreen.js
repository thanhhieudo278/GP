import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function ChatScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 1,
        flexDirection: 'column',
      }}>
        <View
            style={{          
            flexDirection: 'row',
            width:'100%',
            height: 85,
            
            }}>

            <TouchableOpacity 
            style ={{ 
            }}
            onPress={() => navigation.goBack()}
            >
                <Image
                        source={require('../assets/ic_leftarrow.png')}
                        style={{
                            marginVertical: 34,
                            marginHorizontal:20,
                            tintColor: 'black',
                            width: 23,
                            height: 23,
                        }}>
                </Image>
            </TouchableOpacity>

            <View 
                style={{
                    flexDirection: 'row',
                    marginVertical: 30,
                    marginHorizontal:60,
                    alignContent:'center',

                }}>
                    <Image
                    source={require('../assets/ic_clock.png')}
                    style={{
                        marginVertical: 5,
                        tintColor: '#908bf0',
                        width: 20,
                        height: 20,
                        marginRight:10,
                    }}
                    />

                    <Text
                    style={{
                        color: '#908bf0',
                        fontSize: 20,
                        fontWeight: '500',

                    }}>
                    9 AM - 17 PM
                    </Text>
            </View>
        </View>                

        <View style={{
            flex: 1,
            flexDirection:'row',
            }}>
            <Image
                source={require('../assets/trhieu.jpg')}
                style={{
                    marginTop:"4%",
                    marginLeft: '4%',
                    width: 60,
                    height: 60,
                    borderRadius: 34,                           
                    }}
                    />    
                        <View
                            style={{flexDirection: 'column',
                        }}
                        >
                            <Text
                                style={{                            
                                    color: 'black',
                                    marginTop:"10%",
                                    fontSize: 18,
                                    fontWeight: '500',

                                }}>  Prof.Trần Trung Hiếu   
                            </Text>
                            <Text
                                style={{                            
                                    color: 'green',
                                    marginTop:1,
                                    fontSize: 15,
                                    fontWeight: '600',
                                    marginLeft: 10,
                                }}>online
                            </Text>
                        </View>
            <TouchableOpacity style={{
                marginTop:20,
                marginLeft: 60,
                width: 45,
                height: 45,
                borderRadius: 34,
                backgroundColor:'#8883f0'            
            }}>
                <Image
                    source={require('../assets/ic_telephonecall.png')}
                    style={{
                        marginHorizontal:10,
                        marginVertical:10,
                        width: 25,
                        height: 25,
                        tintColor: 'white'                           
                        }}
                        />
            </TouchableOpacity>                                
        </View>    
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
        }}>
            <Image
                    source={require('../assets/example_chat.png')}
                    style={{
                        width: '100%',
                        height: 400,                            
                        }}
                        />

      </View>
      <View
        style={{
          width:"100%",
          height:100,
          paddingTop:-10,
        }}>
            <View style={{
            flexDirection:'row',
            }}>
                <View style={{
                    width: 300,
                    height:50,
                    flexDirection: 'row',
                    borderRadius: 40,
                    marginLeft: 23,
                    marginRight:10,
                    marginVertical: 20,
                    backgroundColor: 'white',
                    borderColor:'gray',
                    borderWidth:1,

                }}>
                    <TextInput style={{   
                            fontSize:17,
                            marginLeft: 23,
                            
                        }}
                            placeholder= 'Type something'
                            maxLength = {100}    
                        />
            
            </View>
            
                <TouchableOpacity style={{
                    marginTop:20,
                    width: 45,
                    height: 45,
                    borderRadius: 34,
                    backgroundColor:'#8883f0'            
                }}>
                    <Image
                        source={require('../assets/ic_send.png')}
                        style={{
                            marginHorizontal:12,
                            marginVertical:12,
                            width: 20,
                            height: 20,
                            tintColor: 'white'                           
                            }}
                            />
                </TouchableOpacity>                                
        </View>    
        
      </View>
    </View>
  );
}

export default ChatScreen;
