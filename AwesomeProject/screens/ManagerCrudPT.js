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
function ManagerCrudPT(props) {
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
              color: 'black',
            }}>
            Information
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 30,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Image
            source={require('../assets/thanhhieu.png')}
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              marginLeft: 130,
              borderRadius:100,
            }}
          />
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
              Name: Do Thanh Hieu
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Age: 18
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Phone: 098 889 9889
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Email: hieuvjppro@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex:25,
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
            Edit
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
    </View>
  );
}

export default ManagerCrudPT;