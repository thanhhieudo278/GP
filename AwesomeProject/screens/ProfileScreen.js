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
          backgroundColor: 'green',
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
        <Text></Text>
      </View>
      <View
        style={{
          flex: 50,
          backgroundColor: 'yellow',
          width: '90%',
          margin:20,
          marginTop:5,
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
              marginVertical: 20,
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