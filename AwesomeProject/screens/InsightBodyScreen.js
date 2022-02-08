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
function InsightBodyScreen({navigation}) {
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
            Insights
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
          onPress={( )=> navigation.navigate("SummaryBodyScreen")}
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
          flex: 50,
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
          Your body
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/ic_body.png')}
            style={{
              width: 100,
              height: 200,
              marginTop: 20,
              marginLeft: 30,
              tintColor: '#FF6680',
            }}
          />
          <View
            style={{
              marginLeft: 40,
              marginTop: 45,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              178 cm
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Height
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              43%
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Water
            </Text>
          </View>
          <View
            style={{
              marginLeft: 40,
              marginTop: 45,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              70 kg
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Weight
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              7h30m
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Sleep
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 50,
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
          Trending
        </Text>
        <Image
          source={require('../assets/ic_chart.png')}
          style={{
            width:240,
            height:240,
            marginTop:10,
            marginLeft:65,
          }}
        />
      </View>
    </View>
  );
}

export default InsightBodyScreen;