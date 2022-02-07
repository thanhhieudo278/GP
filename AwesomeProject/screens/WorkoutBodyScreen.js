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
function WorkoutBodyScreen(props) {
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
            Workouts
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
            }}>
            August 22
          </Text>
        </View>

        <View style={{flex: 1}} />
        <Text
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
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: 10,
          flexDirection: 'row',
          marginBottom:5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 15,
            tintColor: '#6A4DFF',
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 40,
              fontWeight: 'bold',
            }}>
            Core training
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 25,
              color: '#6A4DFF',
            }}>
            220kcal
          </Text>
        </View>
        <Text
            style={{
              marginLeft: 100,
              marginTop:40,
              fontSize: 15,
              fontWeight:'bold',

            }}>
            Monday
          </Text>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: 10,
          flexDirection: 'row',
          marginBottom:5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 15,
            tintColor: '#6A4DFF',
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 40,
              fontWeight: 'bold',
            }}>
            Outdoor Run
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 25,
              color: '#6A4DFF',
            }}>
            562kcal
          </Text>
        </View>
        <Text
            style={{
              marginLeft: 100,
              marginTop:40,
              fontSize: 15,
              fontWeight:'bold',

            }}>
            Monday
          </Text>
      </View><View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: 10,
          flexDirection: 'row',
          marginBottom:5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 15,
            tintColor: '#6A4DFF',
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 40,
              fontWeight: 'bold',
            }}>
            Cycling
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 25,
              color: '#6A4DFF',
            }}>
            371kcal
          </Text>
        </View>
        <Text
            style={{
              marginLeft: 100,
              marginTop:40,
              fontSize: 15,
              fontWeight:'bold',

            }}>
            Monday
          </Text>
      </View><View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: 10,
          flexDirection: 'row',
          marginBottom:5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 15,
            tintColor: '#6A4DFF',
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 40,
              fontWeight: 'bold',
            }}>
            Outdoor Run 
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 25,
              color: '#6A4DFF',
            }}>
            672kcal
          </Text>
        </View>
        <Text
            style={{
              marginLeft: 100,
              marginTop:40,
              fontSize: 15,
              fontWeight:'bold',

            }}>
            Monday
          </Text>
      </View><View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: 10,
          flexDirection: 'row',
          marginBottom:5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 15,
            tintColor: '#6A4DFF',
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 40,
              fontWeight: 'bold',
            }}>
            Cycling
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 25,
              color: '#6A4DFF',
            }}>
            323kcal
          </Text>
        </View>
        <Text
            style={{
              marginLeft: 100,
              marginTop:40,
              fontSize: 15,
              fontWeight:'bold',

            }}>
            Monday
          </Text>
      </View>
    </View>
  );
}

export default WorkoutBodyScreen;