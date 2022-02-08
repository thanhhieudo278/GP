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
import {UIButton} from '../components/index';
//component = function
function NutriInsightScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 100,
      }}>
      <View
        style={{
          flex: 5,
          justifyContent: 'flex-start',
          marginTop: 25,
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 140,
              fontWeight: 'bold',
            }}>
            Insights
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 15,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            alert('dmm');
          }}
          style={{
            backgroundColor: '#9580FF',
            borderRadius: 50,
            height: 100,
            marginLeft: 20,
            marginVertical: 20,
            justifycontent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 15,
            }}>
            Mon
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 7,
            }}>
            02
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9580FF',
            borderRadius: 50,
            height: 100,
            marginLeft: 20,
            marginVertical: 20,
            justifycontent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 15,
            }}>
            Tue
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 7,
            }}>
            03
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9580FF',
            borderRadius: 50,
            height: 100,
            marginLeft: 20,
            marginVertical: 20,
            justifycontent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 15,
            }}>
            Wed
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 7,
            }}>
            04
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9580FF',
            borderRadius: 50,
            height: 100,
            marginLeft: 20,
            marginVertical: 20,
            justifycontent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 15,
            }}>
            Thu
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 7,
            }}>
            05
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#9580FF',
            borderRadius: 50,
            height: 100,
            marginLeft: 20,
            marginVertical: 20,
            justifycontent: 'center',
            alignItems: 'center',
            width: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 15,
            }}>
            Fri
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 7,
            }}>
            06
          </Text>
        </TouchableOpacity>
      </View>
      {/* -------------------------------------------------------- */}
      <TouchableOpacity
        onPress={( )=> navigation.navigate("AboutFoodScreen")}
        style={{
          flex: 25,
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
                elevation: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20,
              }}>
              Breakfast
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: '#FFC34D',
                marginLeft: 20,
              }}>
              472KCAL
            </Text>
          </View>
          <Image
            source={require('../assets/ic_add.png')}
            style={{
              width: 40,
              height: 40,
              marginTop: 25,
              marginLeft: 150,
              tintColor: '#9580FF',
            }}
          />
        </View>
        <View
          style={{
            flexDirection:'row',
          }}>
          <Image
            source={require('../assets/pancakes.png')}
            style={{
              width: 80,
              height: 80,
              marginTop:30,
              marginLeft:30,
            }}
          />
          <View>
            <Text
              style={{
                fontSize:25,
                fontWeight:'bold',
                marginLeft:30,
                marginTop:35,
                color:'#FFC34D'
              }}>
              Pancakes
            </Text>
            <Text
              style={{
                fontSize:17,
                fontWeight:'bold',
                marginLeft:30,
                color:'gray'
              }}>
              472KCAL
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={( )=> navigation.navigate("AboutFoodScreen")}
        style={{
          flex: 25,
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
                elevation: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20,
              }}>
              Lunch
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: '#00CC88',
                marginLeft: 20,
              }}>
              432KCAL
            </Text>
          </View>
          <Image
            source={require('../assets/ic_add.png')}
            style={{
              width: 40,
              height: 40,
              marginTop: 25,
              marginLeft: 200,
              tintColor: '#9580FF',
            }}
          />
        </View>
        <View
          style={{
            flexDirection:'row',
          }}>
          <Image
            source={require('../assets/salad.png')}
            style={{
              width: 80,
              height: 80,
              marginTop:30,
              marginLeft:30,
            }}
          />
          <View>
            <Text
              style={{
                fontSize:25,
                fontWeight:'bold',
                marginLeft:30,
                marginTop:35,
                color:'#00CC88'
              }}>
              Green Salad
            </Text>
            <Text
              style={{
                fontSize:17,
                fontWeight:'bold',
                marginLeft:30,
                color:'gray'
              }}>
              423KCAL
            </Text>
          </View>
        </View>
      </TouchableOpacity>
        {/* -------------------------------------------------------- */}

        

    </View>
  );
}

export default NutriInsightScreen;