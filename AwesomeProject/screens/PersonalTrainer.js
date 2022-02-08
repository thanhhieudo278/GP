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
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function PersonalTrainer({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F08080',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
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

        <View style={{flex: 20}}></View>
        <Text
          style={{
            marginVertical: 30,
            color: 'white',
            fontSize: 26,
            fontWeight: '500',
          }}>
          Your Personal Trainers
        </Text>
        <View style={{flex: 100}}></View>
      </View>
    
      <View
        style={{
          flex: 4,
          borderTopLeftRadius: 70,
          backgroundColor: '#F0F8FF',
          flexDirection: 'column',
          padding: 20,
          paddingTop: 50,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '25%',
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

            elevation: 20,
          }}>
          <Image
            source={require('../assets/trhieu.jpg')}
            style={{
              marginTop: '4%',
              marginLeft: '4%',
              width: 70,
              height: 70,
              borderRadius: 34,
            }}
          />

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                marginTop: '10%',
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              Prof.Trần Trung Hiếu
            </Text>

            <Text
              style={{
                color: 'gray',
                marginTop: 1,
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              The Vegetable Hunter
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_star.png')}
                style={{
                  marginTop: 3,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                5
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_videocall.png')}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 24,
                    height: 24,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_chat.png')}
                  style={{
                    marginTop: 13,
                    marginLeft: 10,
                    width: 20,
                    height: 20,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 35,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_clock.png')}
                style={{
                  marginTop: 2,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                  tintColor: '#363636',
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                9 AM
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '25%',
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

            elevation: 20,
          }}>
          <Image
            source={require('../assets/trhieu.jpg')}
            style={{
              marginTop: '4%',
              marginLeft: '4%',
              width: 70,
              height: 70,
              borderRadius: 34,
            }}
          />

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                marginTop: '10%',
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              Gymer. Hoàng Dũng
            </Text>

            <Text
              style={{
                color: 'gray',
                marginTop: 1,
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              The Dream Musician
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_star.png')}
                style={{
                  marginTop: 3,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                5
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_videocall.png')}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 24,
                    height: 24,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_chat.png')}
                  style={{
                    marginTop: 13,
                    marginLeft: 10,
                    width: 20,
                    height: 20,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 35,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_clock.png')}
                style={{
                  marginTop: 2,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                  tintColor: '#363636',
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                9 AM
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '25%',
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

            elevation: 20,
          }}>
          <Image
            source={require('../assets/trhieu.jpg')}
            style={{
              marginTop: '4%',
              marginLeft: '4%',
              width: 70,
              height: 70,
              borderRadius: 34,
            }}
          />

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                marginTop: '10%',
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              Prof.Tran Trung Hieu
            </Text>

            <Text
              style={{
                color: 'gray',
                marginTop: 1,
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              The Vegetable Hunter
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_star.png')}
                style={{
                  marginTop: 3,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                5
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_videocall.png')}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 24,
                    height: 24,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_chat.png')}
                  style={{
                    marginTop: 13,
                    marginLeft: 10,
                    width: 20,
                    height: 20,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 35,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_clock.png')}
                style={{
                  marginTop: 2,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                  tintColor: '#363636',
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                9 AM
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: '25%',
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

            elevation: 20,
          }}>
          <Image
            source={require('../assets/trhieu.jpg')}
            style={{
              marginTop: '4%',
              marginLeft: '4%',
              width: 70,
              height: 70,
              borderRadius: 34,
            }}
          />

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                marginTop: '10%',
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              Prof.Tran Trung Hieu
            </Text>

            <Text
              style={{
                color: 'gray',
                marginTop: 1,
                fontSize: 18,
                fontWeight: '500',
              }}>
              {' '}
              The Vegetable Hunter
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_star.png')}
                style={{
                  marginTop: 3,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                5
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_videocall.png')}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    width: 24,
                    height: 24,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/ic_chat.png')}
                  style={{
                    marginTop: 13,
                    marginLeft: 10,
                    width: 20,
                    height: 20,
                    tintColor: '#363636',
                  }}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 35,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/ic_clock.png')}
                style={{
                  marginTop: 2,
                  marginLeft: 10,
                  width: 20,
                  height: 20,
                  tintColor: '#363636',
                }}></Image>
              <Text
                style={{
                  color: 'black',
                  marginTop: 1,
                  fontSize: 16,
                }}>
                {' '}
                9 AM
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PersonalTrainer;