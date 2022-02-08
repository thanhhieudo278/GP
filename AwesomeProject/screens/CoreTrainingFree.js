import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function CoreTrainingFree({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#6666FF',
        flex: 100,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 10,
          width: 350,
          height: 80,
        }}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
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
        <View style={{flex: 80}}></View>
        <Text
          style={{
            marginVertical: 30,
            color: 'white',
            fontSize: 26,
            fontWeight: '500',
          }}>
          Core Training
        </Text>
        <View style={{flex: 100}}></View>
      </View>

      <View
        style={{
            marginTop:-20,
            flex: 50,
            borderTopLeftRadius: 70,
            backgroundColor: '#F0F8FF',
            flexDirection: 'column',
            
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            paddingTop: 30,
          }}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontSize: 26,
              fontWeight: '500',
            }}>
            Core Training
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#836FFF',
              marginTop: 5,
              marginLeft: 135,
            }}>
            20min
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 20,
          
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {' '}
              Difficulty:
            </Text>

            <Image
              source={require('../assets/ic_star.png')}
              style={{
                marginLeft: 5,
                marginTop: 2,
                width: 15,
                height: 15,
              }}></Image>
            <Image
              source={require('../assets/ic_star.png')}
              style={{
                marginLeft: 5,
                marginTop: 2,
                width: 15,
                height: 15,
              }}></Image>
            <Image
              source={require('../assets/ic_star.png')}
              style={{
                marginLeft: 5,
                marginTop: 2,
                width: 15,
                height: 15,
              }}></Image>
          </View>
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 35,
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Program
        </Text>

        <ScrollView
          style={{
            height:250,
            marginTop: 20,
            width:'100%'
          }}>
          {/* tao 1 tab task -end*/}
          <View
            style={{
                marginLeft: 20,
                width: 350,
                height: 80,
                borderRadius: 20,
                marginBottom: 15,
                backgroundColor: 'white',
                flexDirection: 'column',
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
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 15,
                  marginLeft: 25,
                  borderRadius: 30,
                  backgroundColor: '#e0dbff',
                }}>
                <Image
                  source={require('../assets/ic_dumbbell.png')}
                  style={{
                    alignSelf: 'center',
                    marginTop: 15,
                    width: 20,
                    height: 20,
                    tintColor: '#948ff2',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 20,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  Push Ups
                </Text>

                <Text
                  style={{
                    color: 'gray',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  01:00
                </Text>
              </View>
            </View>
          </View>
          {/* tao 1 tab task -end*/}

          {/* tao 1 tab task -end*/}
          <View
            style={{
                marginLeft: 20,
                width: 350,
                height: 80,
                borderRadius: 20,
                marginBottom: 15,
                backgroundColor: 'white',
                flexDirection: 'column',
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
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 15,
                  marginLeft: 25,
                  borderRadius: 30,
                  backgroundColor: '#e0dbff',
                }}>
                <Image
                  source={require('../assets/ic_dumbbell.png')}
                  style={{
                    alignSelf: 'center',
                    marginTop: 15,
                    width: 20,
                    height: 20,
                    tintColor: '#948ff2',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 20,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  Push Ups
                </Text>

                <Text
                  style={{
                    color: 'gray',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  01:00
                </Text>
              </View>
            </View>
          </View>
          {/* tao 1 tab calendar -end*/}

          {/* tao 1 tab task -end*/}
          <View
            style={{
                marginLeft: 20,
                width: 350,
                height: 80,
                borderRadius: 20,
                marginBottom: 15,
                backgroundColor: 'white',
                flexDirection: 'column',
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
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 15,
                  marginLeft: 25,
                  borderRadius: 30,
                  backgroundColor: '#e0dbff',
                }}>
                <Image
                  source={require('../assets/ic_dumbbell.png')}
                  style={{
                    alignSelf: 'center',
                    marginTop: 15,
                    width: 20,
                    height: 20,
                    tintColor: '#948ff2',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 20,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  Push Ups
                </Text>

                <Text
                  style={{
                    color: 'gray',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  01:00
                </Text>
              </View>
            </View>
          </View>
          {/* tao 1 tab calendar -end*/}

          {/* tao 1 tab task -end*/}
          <View
            style={{
                marginLeft: 20,
                width: 350,
                height: 80,
                borderRadius: 20,
                marginBottom: 15,
                backgroundColor: 'white',
                flexDirection: 'column',
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
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 15,
                  marginLeft: 25,
                  borderRadius: 30,
                  backgroundColor: '#e0dbff',
                }}>
                <Image
                  source={require('../assets/ic_dumbbell.png')}
                  style={{
                    alignSelf: 'center',
                    marginTop: 15,
                    width: 20,
                    height: 20,
                    tintColor: '#948ff2',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 20,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  Push Ups
                </Text>

                <Text
                  style={{
                    color: 'gray',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  01:00
                </Text>
              </View>
            </View>
          </View>
          {/* tao 1 tab calendar -end*/}
        </ScrollView>

        {/*    nut start workout */}
        <View
          style={{
            flex: 4,
            padding:20,
            
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#6666FF',
              borderRadius: 20,
              height: 50,
              width:"70%",
              marginTop:-10,
              marginLeft:50,
              justifycontent: 'center',
              alignItems: 'center',
              
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                marginVertical: 10,
              }}>
              Start workout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CoreTrainingFree;