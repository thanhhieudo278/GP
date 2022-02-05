import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  
} from 'react-native';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function SelectWorkout({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 1,
      }}>
      <View
        style={{
          
          flexDirection: 'row',
          
          flex: 1,
          
        }}>
        
        <TouchableOpacity 
          style ={{ 
          }}
          onPress={() => navigation.goBack()}
        >
            <Image
                    source={require('../assets/ic_leftarrow.png')}
                    style={{
                        marginVertical: 37,
                        marginHorizontal:20,
                        tintColor: 'black',
                        width: 23,
                        height: 23,
                    }}>
            </Image>
        </TouchableOpacity>

        <View style={{flex: 45}}></View>
        <Text
          style={{
            
            marginVertical: 30,
            color: 'black',
            fontSize: 26,
          }}>
          Select Workout
        </Text>
        <View style={{flex: 100}}></View>
      </View>

      <View
        style={{
          flex: 4,
          
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignContent: 'flex-start',
          }}>
          <View
            style={{
                flex: 65,
                
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
              style={{
                borderWidth:3,
                borderColor:'#6666FF',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                height: 55,              
                alignItems: 'center',
                justifyContent: 'center',
                width: "75%",
                height: "85%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 20,

                
                
              }}>
              <Image
                source={require('../assets/ic_running.png')}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    tintColor: '#6666FF',
                    width: "20%",
                    height: "30%"
                }}
              />
              <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6666FF',

                }}> Running
                

              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
                flex: 65,
                
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
              style={{
                borderWidth:3,
                borderColor:'#6666FF',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                height: 55,              
                alignItems: 'center',
                justifyContent: 'center',
                width: "75%",
                height: "85%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 20,
                
              }}>
              <Image
                source={require('../assets/ic_running.png')}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    tintColor: '#6666FF',
                    width: "20%",
                    height: "30%"
                }}
              />
              <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6666FF',

                }}> Running
                

              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
                flex: 100,
                
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
              style={{
                borderWidth:3,
                borderColor:'#6666FF',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                height: 55,              
                alignItems: 'center',
                justifyContent: 'center',
                width: "75%",
                height: "90%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 20,
                
              }}>
              <Image
                source={require('../assets/ic_running.png')}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    tintColor: '#6666FF',
                    width: "20%",
                    height: "20%"
                }}
              />
              <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6666FF',

                }}> Running
                

              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignContent: 'flex-end',
          }}>
         <View
            style={{
                flex: 100,
                
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
              onPress={( ) => navigation.navigate("CoreTraining")}    
              style={{
                borderWidth:3,
                borderColor:'#6666FF',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                height: 55,              
                alignItems: 'center',
                justifyContent: 'center',
                width: "75%",
                height: "90%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 20,
                
              }}>
              <Image
                source={require('../assets/ic_running.png')}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    tintColor: '#6666FF',
                    width: "20%",
                    height: "20%"
                }}
              />
              <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6666FF',

                }}> Core Training
                

              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
                flex: 65,
                
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
              style={{
                borderWidth:3,
                borderColor:'#6666FF',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                height: 55,              
                alignItems: 'center',
                justifyContent: 'center',
                width: "75%",
                height: "85%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 20,

                
                
              }}>
              <Image
                source={require('../assets/ic_running.png')}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    tintColor: '#6666FF',
                    width: "20%",
                    height: "30%"
                }}
              />
              <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6666FF',

                }}> Running
                

              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
                flex: 65,
                
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
              style={{
                borderColor:'#6666FF',
                borderWidth:3,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                height: 55,              
                alignItems: 'center',
                justifyContent: 'center',
                width: "75%",
                height: "85%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 20,
                
              }}>
              <Image
                source={require('../assets/ic_running.png')}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    tintColor: '#6666FF',
                    width: "20%",
                    height: "30%"
                }}
              />
              <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6666FF',

                }}> Running
                

              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        
      </View>
    </View>
  );
}

export default SelectWorkout;
