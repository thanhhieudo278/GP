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
function SummaryBodyScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 100,
      }}>
      <View
        style={{
          flex: 10,
          justifyContent: 'flex-start',
          marginTop: 25,
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            Summary
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
            }}>
            This week
          </Text>
        </View>

        <View style={{flex: 1}} />
        <Text
          onPress={( )=> navigation.navigate("WorkoutBodyScreen")}
          style={{
            width: 60,
            height: 30,
            marginEnd: 20,
            marginTop: 15,
            color: 'blue',
          }}>
          Show all
        </Text>
      </View>

      <View
        style={{
          flex: 30,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#6A4DFF',
            marginTop: 20,
            marginLeft: 20,
          }}>
          Chart
        </Text>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          flexDirection:'row',
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#6A4DFF',
            marginTop: 20,
            marginLeft: 20,
          }}>
          Sunday
        </Text>
        <Text
          style={{
            fontWeight:'bold',
            marginLeft:70,
            marginTop:30,
          }}>
          6h20m
        </Text>
        <Image
          source={require('../assets/ic_graph.png')}
          style={{
            width:50,
            height:50,
            marginLeft:60,
            marginTop:15,
            tintColor:'#6A4DFF',
          }}/>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          flexDirection:'row',
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#6A4DFF',
            marginTop: 20,
            marginLeft: 20,
          }}>
          Monday
        </Text>
        <Text
          style={{
            fontWeight:'bold',
            marginLeft:70,
            marginTop:30,
          }}>
          7h40m
        </Text>
        <Image
          source={require('../assets/ic_graph.png')}
          style={{
            width:50,
            height:50,
            marginLeft:60,
            marginTop:15,
            tintColor:'#6A4DFF',
          }}/>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          flexDirection:'row',
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#6A4DFF',
            marginTop: 20,
            marginLeft: 20,
          }}>
          Tuesday
        </Text>
        <Text
          style={{
            fontWeight:'bold',
            marginLeft:70,
            marginTop:30,
          }}>
          5h15m
        </Text>
        <Image
          source={require('../assets/ic_graph.png')}
          style={{
            width:50,
            height:50,
            marginLeft:60,
            marginTop:15,
            tintColor:'#6A4DFF',
          }}/>
      </View>
    </View>
  );
}

export default SummaryBodyScreen;