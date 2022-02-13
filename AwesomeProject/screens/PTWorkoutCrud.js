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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
//component = function
function PTWorkoutCrud() {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex:1,
      }}>
      <View
        style={{
          justifyContent: 'flex-start',
          marginTop: 25,
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 20,
              fontWeight: '500',
              color: 'black',
            }}>
            Workout
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          marginTop:40,
        }}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View
            style={{
              marginLeft: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Name:
            </Text>
            <TextInput
              style={{
                color: 'black',
              }}
              placeholder="Name workout"
              placeholderTextColor={'grey'}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Difficulty: 
            </Text>
            <TextInput
              style={{
                color: 'black',
              }}
              placeholder="Difficulty"
              placeholderTextColor={'grey'}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Duration: 
            </Text>
            <TextInput
              style={{
                color: 'black',
              }}
              placeholder="Duration"
              placeholderTextColor={'grey'}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Program: 
            </Text>
            <TextInput
              style={{
                color: 'black',
              }}
              placeholder="Program"
              placeholderTextColor={'grey'}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection:'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#6666FF',
            borderRadius: 20,
            height: 55,
            width: 100,
            marginVertical: 30,
            marginHorizontal:50,
            justifycontent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 10,
            }}>
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderRadius: 20,
            height: 55,
            width:100,
            marginVertical: 30,
            marginLeft:30,
            justifycontent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 10,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity
          
          style={{
            backgroundColor: '#4444ff',
            borderRadius: 20,
            height: 55,
            width:150,
            marginVertical: 30,
            marginLeft:120,
            
            justifycontent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 10,
            }}>
            Create
          </Text>
        </TouchableOpacity>    
    </View>
  );
}

export default PTWorkoutCrud;