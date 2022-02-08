import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function DiscoverWorkouts({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#6666CC',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: 350,
          height: 80,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Image
            source={require('../assets/ic_leftarrow.png')}
            style={{
              marginVertical: 37,
              marginHorizontal: 20,
              tintColor: 'white',
              width: 23,
              height: 23,
            }}></Image>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: '#F0F8FF',
          width: 350,
          height: 60,
          flexDirection: 'row',
          borderRadius: 40,
          marginLeft: 23,
          marginRight: 23,
        }}>
        <Image
          source={require('../assets/ic_search.png')}
          style={{
            marginVertical: 21,
            marginHorizontal: 20,
            marginLeft: 30,
            tintColor: '#6666CC',
            width: 23,
            height: 23,
          }}></Image>

        <TextInput
          style={{
            fontSize: 17,
          }}
          placeholder="Search here"
          maxLength={100}
        />
      </View>

      <View>
        <Text
          style={{
            marginLeft: 40,
            marginVertical: 30,
            color: 'white',
            fontSize: 26,
            fontWeight: '500',
          }}>
          Discover workouts
        </Text>
      </View>

      <View
        style={{
          flex: 5,
          borderTopLeftRadius: 70,
          backgroundColor: '#F0F8FF',
          flexDirection: 'column',
          
          paddingTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 40,
              borderRadius: 20,
              marginBottom: 15,
              backgroundColor: '#FFCCCC',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '500',
                color: '#FF6666',
                marginLeft: 18,
              }}>
              Core
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 110,
              height: 40,
              borderRadius: 20,
              marginBottom: 15,
              marginLeft: 20,
              backgroundColor: '#FFCC99',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '500',
                color: '#FF7F00',
                marginLeft: 23,
              }}>
              Strength
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 110,
              height: 40,
              marginBottom: 15,
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '500',
                color: 'gray',
                marginLeft: 23,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

              
        <ScrollView>
          <View
            style={{
                marginLeft: 20,
              width: 350,
              height: 240,
              borderRadius: 20,
              marginVertical: 15,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 25,
                  fontSize: 30,
                  fontWeight: '500',
                  color: 'black',
                }}>
                Core Training
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/trhieu.jpg')}
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    width: 70,
                    height: 70,
                    borderRadius: 34,
                  }}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 35,
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {' '}
                    Prof.Trung Hiếu
                  </Text>

                  <Text
                    style={{
                      color: 'gray',
                      marginTop: 1,
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {' '}
                    The Hunter
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginLeft: 25,
                }}>
                <Text
                  style={{
                    color: 'black',

                    fontSize: 16,
                  }}>
                  {' '}
                  Difficulty:
                </Text>

                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    marginLeft: 5,
                    width: 20,
                    height: 20,
                  }}></Image>
                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                  }}></Image>
                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                  }}></Image>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginTop: 20,
              }}>
              <View
                style={{
                  width: 70,
                  height: 30,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: '#E3E4FA',
                  marginLeft: 30,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#836FFF',
                    marginLeft: 18,
                  }}>
                  30m
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#6666CC',
                  flexDirection: 'row',
                  marginTop: 100,
                }}>
                <Text
                  style={{
                    marginTop: 7,
                    fontSize: 16,
                    fontWeight: '500',
                    color: 'white',
                    marginLeft: 24,
                  }}>
                  Start now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
                marginLeft: 20,
              width: 350,
              height: 240,
              borderRadius: 20,
              marginBottom: 15,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 25,
                  fontSize: 30,
                  fontWeight: '500',
                  color: 'black',
                }}>
                Core Training
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/trhieu.jpg')}
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    width: 70,
                    height: 70,
                    borderRadius: 34,
                  }}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 35,
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {' '}
                    Prof.Trung Hiếu
                  </Text>

                  <Text
                    style={{
                      color: 'gray',
                      marginTop: 1,
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {' '}
                    The Hunter
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginLeft: 25,
                }}>
                <Text
                  style={{
                    color: 'black',

                    fontSize: 16,
                  }}>
                  {' '}
                  Difficulty:
                </Text>

                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    marginLeft: 5,
                    width: 20,
                    height: 20,
                  }}></Image>
                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                  }}></Image>
                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                  }}></Image>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginTop: 20,
              }}>
              <View
                style={{
                  width: 70,
                  height: 30,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: '#E3E4FA',
                  marginLeft: 30,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#836FFF',
                    marginLeft: 18,
                  }}>
                  30m
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#6666CC',
                  flexDirection: 'row',
                  marginTop: 100,
                }}>
                <Text
                  style={{
                    marginTop: 7,
                    fontSize: 16,
                    fontWeight: '500',
                    color: 'white',
                    marginLeft: 24,
                  }}>
                  Start now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
                marginLeft: 20,
              width: 350,
              height: 240,
              borderRadius: 20,
              marginBottom: 15,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 25,
                  fontSize: 30,
                  fontWeight: '500',
                  color: 'black',
                }}>
                Core Training
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/trhieu.jpg')}
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    width: 70,
                    height: 70,
                    borderRadius: 34,
                  }}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 35,
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {' '}
                    Prof.Trung Hiếu
                  </Text>

                  <Text
                    style={{
                      color: 'gray',
                      marginTop: 1,
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    {' '}
                    The Hunter
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginLeft: 25,
                }}>
                <Text
                  style={{
                    color: 'black',

                    fontSize: 16,
                  }}>
                  {' '}
                  Difficulty:
                </Text>

                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    marginLeft: 5,
                    width: 20,
                    height: 20,
                  }}></Image>
                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                  }}></Image>
                <Image
                  source={require('../assets/ic_star.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: 'gray',
                  }}></Image>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginTop: 20,
              }}>
              <View
                style={{
                  width: 70,
                  height: 30,
                  borderRadius: 20,
                  marginBottom: 15,
                  backgroundColor: '#E3E4FA',
                  marginLeft: 30,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#836FFF',
                    marginLeft: 18,
                  }}>
                  30m
                </Text>
              </View>

              
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default DiscoverWorkouts;