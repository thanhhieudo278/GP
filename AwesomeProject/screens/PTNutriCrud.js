import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Directions, ScrollView, TextInput} from 'react-native-gesture-handler';
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
function PTNutriCrud(props) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 1,
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
              fontWeight: 'bold',
              color: 'black',
            }}>
            Nutrition
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 10,
            marginTop: 40,
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
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Name:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Name nutrition"
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Protein:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Protein"
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Carbo:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Carbo"
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Fat:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Fat"
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Calories:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Calories"
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginLeft: 100,
                }}>
                Ingredients
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Name:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Ingredients name"
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Gram:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Ingredients gram "
                placeholderTextColor={'grey'}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Preparation:
              </Text>
              <TextInput
                style={{
                  color: 'black',
                }}
                placeholder="Preparation"
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
        </View>
        <View>
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
      
        </View>
        </ScrollView>
    </View>
  );
}

export default PTNutriCrud;