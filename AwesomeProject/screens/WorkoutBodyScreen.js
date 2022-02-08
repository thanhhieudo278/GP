import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';

//component = function
function WorkoutBodyScreen(props) {
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
{/* ------------------------------------------------------------------ */}
    <ScrollView 
      style={{
        marginTop:10,
        }}>
      <View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          borderRadius: 20,
          flexDirection: 'row',
          
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 25,
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
    {/* ------------------------------------------------------------------ */}

    <View
        style={{
          marginTop:10,
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          borderRadius: 20,
          flexDirection: 'row',
          marginBottom:5,
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 25,
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
    {/* ------------------------------------------------------------------ */}

    <View
        style={{
          marginTop:10,
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          borderRadius: 20,
          flexDirection: 'row',
          marginBottom:5,
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 25,
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
    {/* ------------------------------------------------------------------ */}
    <View
        style={{
          marginTop:10,
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          borderRadius: 20,
          flexDirection: 'row',
          marginBottom:5,
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 25,
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
    {/* ------------------------------------------------------------------ */}
    <View
        style={{
          marginTop:10,
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          borderRadius: 20,
          flexDirection: 'row',
          marginBottom:5,
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 25,
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
    {/* ------------------------------------------------------------------ */}
    <View
        style={{
          marginTop:10,
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          borderRadius: 20,
          flexDirection: 'row',
          marginBottom:5,
          shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,
        }}>
        <Image
          source={require('../assets/coretraining.png')}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginTop: 25,
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
    {/* ------------------------------------------------------------------ */}
    

    

              

    </ScrollView>        
    </View>
  );
}

export default WorkoutBodyScreen;