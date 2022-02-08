import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  
} from 'react-native';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function Nutrition({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#00ba88',
        flex: 1,
      }}>
      <View
        style={{
            flexDirection: 'row',  
            width: 350,
            height:80,
            
        }}>
        
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style ={{ 
        }}>
            <Image
                    source={require('../assets/ic_leftarrow.png')}
                    style={{
                        marginVertical: 37,
                        marginHorizontal:20,
                        tintColor: 'white',
                        width: 23,
                        height: 23,
                        
                    }}>
            </Image>
        </TouchableOpacity>
      </View>

        <View style={{
            backgroundColor: '#F0F8FF',
            width: 350,
            height:60,
            flexDirection: 'row',
            borderRadius: 40,
            marginLeft: 23,
            marginRight:23,

        }}>
             <Image
                    source={require('../assets/ic_search.png')}
                    style={{
                        marginVertical: 21,
                        marginHorizontal:20,
                        marginLeft: 30,
                        tintColor: '#6666CC',
                        width: 23,
                        height: 23,
                    }}>
            </Image>

            <TextInput style={{
                    
                    fontSize:17,
                    
                }}
                    placeholder= 'Search here'
                    maxLength = {100}    
                />
            
        </View>

        <View>        
        
            <Text
                style={{
                marginLeft: 40,
                marginVertical: 30,
                color: 'white',
                fontSize: 26,
                fontWeight: '500'
                }}>Discover recipes
                
            </Text>

        </View>

      <View
        style={{
          flex: 5,
          borderTopLeftRadius:70,
          backgroundColor: '#F0F8FF',
          flexDirection: 'column',
          
          paddingTop: 30,
        }}>
            
            <View
                style={{
                    flexDirection:'row',
                    paddingLeft:20,
                }}>


                   

                <TouchableOpacity
                    style={{
                        width:110,
                        height: 40,
                        borderRadius:20,
                        marginBottom: 15,                    
                        backgroundColor: '#ffdfc8',
                        flexDirection: 'row',
                        }}>
                            <Text
                                style={{
                                    marginTop:8,
                                    fontSize:16,
                                    fontWeight:'700',
                                    color: '#fca15f', 
                                    marginLeft:18,                                    
                                }}
                            >Breakfast</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width:100,
                        height: 40,
                        borderRadius:20,
                        marginBottom: 15,
                        marginLeft: 17,                    
                        backgroundColor: '#c7d9ff',
                        flexDirection: 'row',
                        }}>
                            <Text
                                style={{
                                    marginTop:8,
                                    fontSize:16,
                                    fontWeight:'700',
                                    color: '#82a7f6', 
                                    marginLeft:29,                                    
                                }}
                            >Lunch</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                    onPress={( )=> navigation.navigate("NutriInsightScreen")}
                    style={{
                        width:100,
                        height: 40,                       
                        marginBottom: 15,
                                           

                       }}>
                            <Text
                                style={{
                                    marginTop:8,
                                    fontSize:16,
                                    fontWeight:'500',
                                    color: 'gray', 
                                    marginLeft:23,                                    
                                }}
                            >See all</Text>
                </TouchableOpacity>                          

            </View>
    


                               
        {/* tao 1 tab recipe-end*/}                    
        <ScrollView>                         
            <View
                style={{
                    marginLeft:20,
                    width: 350,
                    height: 150,
                    borderRadius:20,
                    marginBottom: 15,                    
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                elevation: 5,
                    
                }}>
                        <View style={{
                            flexDirection:'column',
                            marginTop:20,
                            marginLeft:30,
                    
                        }}>

                            <TouchableOpacity>
                                    
                                            <Image
                                            source={require('../assets/ic_outlinestar.png')}
                                            style={{                                                                              
                                                width: 20,
                                                height: 20,                                             
                                            }}>                                       
                                            </Image>
                            </TouchableOpacity>
                            
                            <View style={{flexDirection:'row'}}>
                            
                                <View style={{flexDirection: 'column',}}>                             
                                    <Text
                                        style={{                            
                                            color: 'black',
                                            marginTop:5,
                                            fontSize: 17,
                                            fontWeight: '500',

                                        }}>Green Salad

                                        
                                    </Text>

                                    <Text
                                        style={{                            
                                            color: '#1ec296',
                                            marginTop:1,
                                            fontSize: 17,
                                            fontWeight: '500',

                                        }}>423kcal
                                        
                                    </Text>
                                    
                                    
                                </View>
   
                            </View>

                    </View>

                    <Image
                                source={require('../assets/img_greenssalad.jpg')}
                                style={{  
                                    width: 150,
                                    height: 150,
                                    marginLeft:78,
                                    borderTopLeftRadius:65,
                                    borderBottomLeftRadius:65,
                                    borderTopRightRadius:20,
                                    borderBottomRightRadius:20,
                                    

                                    }}/>
                                                                                                    
            </View>
            
        {/* tao 1 tab recipe-end*/}


        


        {/* tao 1 tab recipe-end*/}                    

        <View
                style={{
                    marginLeft:20,
                    width: 350,
                    height: 150,
                    borderRadius:20,
                    marginBottom: 15,                    
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                elevation: 5,
                    
                }}>
                        <View style={{
                            flexDirection:'column',
                            marginTop:20,
                            marginLeft:30,
                    
                        }}>

                            <TouchableOpacity>
                                    
                                            <Image
                                            source={require('../assets/ic_outlinestar.png')}
                                            style={{                                                                              
                                                width: 20,
                                                height: 20,                                             
                                            }}>                                       
                                            </Image>
                            </TouchableOpacity>
                            
                            <View style={{flexDirection:'row'}}>
                            
                                <View style={{flexDirection: 'column',}}>                             
                                    <Text
                                        style={{                            
                                            color: 'black',
                                            marginTop:5,
                                            fontSize: 17,
                                            fontWeight: '500',

                                        }}>Green Salad

                                        
                                    </Text>

                                    <Text
                                        style={{                            
                                            color: '#1ec296',
                                            marginTop:1,
                                            fontSize: 17,
                                            fontWeight: '500',

                                        }}>423kcal
                                        
                                    </Text>
                                    
                                    
                                </View>
   
                            </View>

                    </View>

                    <Image
                                source={require('../assets/img_greenssalad.jpg')}
                                style={{  
                                    width: 150,
                                    height: 150,
                                    marginLeft:78,
                                    borderTopLeftRadius:65,
                                    borderBottomLeftRadius:65,
                                    borderTopRightRadius:20,
                                    borderBottomRightRadius:20,
                                    

                                    }}/>
                                                                                                    
            </View>
            
        {/* tao 1 tab recipe-end*/}



        {/* tao 1 tab recipe-end*/}                    

        <View
                style={{
                    marginLeft:20,
                    width: 350,
                    height: 150,
                    borderRadius:20,
                    marginBottom: 15,                    
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                elevation: 5,
                    
                }}>
                        <View style={{
                            flexDirection:'column',
                            marginTop:20,
                            marginLeft:30,
                    
                        }}>

                            <TouchableOpacity>
                                    
                                            <Image
                                            source={require('../assets/ic_outlinestar.png')}
                                            style={{                                                                              
                                                width: 20,
                                                height: 20,                                             
                                            }}>                                       
                                            </Image>
                            </TouchableOpacity>
                            
                            <View style={{flexDirection:'row'}}>
                            
                                <View style={{flexDirection: 'column',}}>                             
                                    <Text
                                        style={{                            
                                            color: 'black',
                                            marginTop:5,
                                            fontSize: 17,
                                            fontWeight: '500',

                                        }}>Green Salad

                                        
                                    </Text>

                                    <Text
                                        style={{                            
                                            color: '#1ec296',
                                            marginTop:1,
                                            fontSize: 17,
                                            fontWeight: '500',

                                        }}>423kcal
                                        
                                    </Text>
                                    
                                    
                                </View>
   
                            </View>

                    </View>

                    <Image
                                source={require('../assets/img_greenssalad.jpg')}
                                style={{  
                                    width: 150,
                                    height: 150,
                                    marginLeft:78,
                                    borderTopLeftRadius:65,
                                    borderBottomLeftRadius:65,
                                    borderTopRightRadius:20,
                                    borderBottomRightRadius:20,
                                    

                                    }}/>
                                                                                                    
            </View>
            
        {/* tao 1 tab recipe-end*/}
        </ScrollView>                            
        









        


            

            

            
            
            
            
            
            

            
        

        
      </View>

      
    </View>
  );
}

export default Nutrition;
