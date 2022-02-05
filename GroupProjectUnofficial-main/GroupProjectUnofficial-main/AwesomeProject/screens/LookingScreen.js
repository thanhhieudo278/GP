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
function LookingScreen({navigation}) {
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
          flex: 3,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 26,
            fontWeight: '500',
          }}>
          {' '}
          What are you looking for?
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
            onPress={( )=> navigation.navigate("FindPT")}           
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              height: 130,
              marginHorizontal: 35,
              marginVertical: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.30,
              shadowRadius: 2.5,
              elevation: 15,
              
            }}>
            <View>
              <Text
                style={{
                  color: '#FF6680',
                  fontSize: 25,
                  marginVertical: 10,
                  marginLeft: 30,
                }}>
                Personal Trainer
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 30,
                }}>
                Find the perfect PT that
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 30,
                }}>
                fits your needs.
              </Text>
            </View>

            <View style={{flex: 1}} />
            <Image
              source={require('../assets/ic_pt.png')}
              style={{
                width: 60,
                height: 60,
                marginEnd: 20,
                marginVertical: 30,
                tintColor: '#FF6680',
              }}
            />
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
            onPress={( )=> navigation.navigate("DiscoverWorkouts")}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              height: 130,
              marginHorizontal: 35,
              marginVertical: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.30,
              shadowRadius: 2.5,
              elevation: 15,
            }}>
            <View>
              <Text
                style={{
                  color: '#8066FF',
                  fontSize: 25,
                  marginVertical: 10,
                  marginLeft: 30,
                }}>
                Workouts
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 30,
                }}>
                We have all the
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 30,
                }}>
                workout you need.
              </Text>
            </View>

            <View style={{flex: 1}} />
            <Image
              source={require('../assets/ic_dumbbell.png')}
              style={{
                width: 60,
                height: 60,
                marginEnd: 20,
                marginVertical: 30,
                tintColor: '#8066FF',
              }}
            />
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
            onPress={( )=> navigation.navigate("Nutrition")}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              height: 130,
              marginHorizontal: 35,
              marginVertical: 20,
              alignItems: 'flex-start',
              flexDirection: 'row',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.30,
              shadowRadius: 2.5,
              elevation: 15,
            }}>
            <View>
              <Text
                style={{
                  color: '#009980',
                  fontSize: 25,
                  marginVertical: 10,
                  marginLeft: 30,
                }}>
                Nutrition
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 30,
                }}>
                Look at healthy 
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginLeft: 30,
                }}>
                menu for you.
              </Text>
            </View>

            <View style={{flex: 1}} />
            <Image
              source={require('../assets/ic_nutrition.png')}
              style={{
                width: 60,
                height: 60,
                marginEnd: 20,
                marginVertical: 30,
                tintColor: '#009980',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LookingScreen;