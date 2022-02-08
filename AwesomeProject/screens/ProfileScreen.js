import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Directions, TextInput} from 'react-native-gesture-handler';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
//component = function
function ProfileScreen(props) {
  return (
    <View
      style={{
        backgroundColor: '#f7fafe',
        flex: 100,
      }}>
      <View
        style={{
          flexDirection: 'column',
          flex: 15,
          justifyContent: 'flex-start',
          marginTop: 25,
        }}>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 20,
            fontWeight: '500',
            color: 'black',
          }}>
          Hello Tr.Hieu
        </Text>
        <Text
            style={{
            fontSize: 15,
            marginLeft: 20,
            fontWeight: '500',
          }}>
              Today 
        </Text>
        
      </View>
      <View
        style={{
          flex: 60,
          width: '90%',
          margin:20,
          borderRadius:20,
          shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                elevation: 15,
        }}>
          <Image
            source={require('../assets/ex_chartbody.png')}
              style={{
                borderRadius:20,
                width:'100%',
                height:'100%',
                  
              }}
              >
          </Image>
      </View>


      <View 
        style={{
          flexDirection:'row',
          flex: 50,
          margin:20,
          marginTop:5,
        }}>

        <View
          style={{
            flex: 50,
            width: '90%',

            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

          elevation: 15,
          }}>
            <Image
                source={require('../assets/ex_heartrate.png')}
                style={{
                  borderRadius:20,
                  width:'100%',
                  height:'100%',
                    
                }}
              ></Image>
        </View>

        <View style={{flex:10}}></View> 

        <View
          style={{
            flex: 50,
            backgroundColor: 'yellow',
            width: '90%',
            
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

          elevation: 15,
          }}>
              <Image
                source={require('../assets/ex_sleepcycle.png')}
                style={{
                  borderRadius:20,
                  width:'100%',
                  height:'100%',
                    
                }}
              >
          </Image> 
        </View>
      </View>      


      <View
        style={{
          flex: 50,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignContent:'center',
            justifyContent:'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#8883f0',
              borderRadius: 30,
              height: 50,
              marginHorizontal: 20,
              marginVertical: 10,
              justifycontent: 'center',
              alignItems: 'center',
              width:'70%',
            }}>
            <Text
              style={{
                color: '#f2f2fe',
                fontSize: 23,
                marginVertical: 7,
              }}>
             New widget
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;