import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Directions, TextInput} from 'react-native-gesture-handler';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
//component = function
function PickRoleScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 100,
      }}>
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 30,
          flex: 5,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Who are you?
        </Text>
      </View>
      <View
        style={{
          flex: 12,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={( )=> navigation.navigate("ManagerHome")}  
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              height: 130,
              marginHorizontal: 35,
              marginVertical: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View>
              <Text
                style={{
                  color: '#FF6680',
                  fontSize: 50,
                  marginVertical: 30,
                  marginLeft: 60,
                }}>
                Manager
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 12,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={( )=> navigation.navigate("PTHome")}  
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              height: 130,
              marginHorizontal: 35,
              marginVertical: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View>
              <Text
                style={{
                  color: '#8066FF',
                  fontSize: 40,
                  marginVertical: 35,
                  marginLeft: 15,
                }}>
                Personal Trainer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 22,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={( )=> navigation.navigate("FreeScreen")}  
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              height: 130,
              marginHorizontal: 35,
              marginVertical: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View>
              <Text
                style={{
                  color: '#009980',
                  fontSize: 50,
                  marginVertical: 25,
                  marginLeft: 110,
                }}>
                User
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PickRoleScreen;