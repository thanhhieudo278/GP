import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function FindPT({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#FF9999',
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
          Find Your PT
        </Text>
      </View>

      <View
        style={{
          flex: 5,
          borderTopLeftRadius: 70,
          backgroundColor: '#F0F8FF',
          flexDirection: 'column',
          
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            paddingTop: 50,
          }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 40,
              borderRadius: 20,
              marginBottom: 15,
              backgroundColor: '#d1fbf0',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '700',
                color: '#0dbe8e',
                marginLeft: 18,
              }}>
              Nutritionist
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 140,
              height: 40,
              borderRadius: 20,
              marginBottom: 15,
              marginLeft: 17,
              backgroundColor: '#e0dbff',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '700',
                color: '#928df2',
                marginLeft: 25,
              }}>
              Cardiologist
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              marginBottom: 15,
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

        {/* tao 1 tab calendar -end*/}
        <ScrollView style={{
            borderRadius: 20,
            marginTop:-30,
            
        }}>
        <View style={{marginLeft:20}}>    
            <View
                style={{  
                width: 350,
                height: 150,
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
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../assets/trhieu.jpg')}
                    style={{
                        marginTop: 20,
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
                        marginTop: 25,
                        fontSize: 17,
                        fontWeight: '500',
                        }}>
                        {' '}
                        Prof.Trung Hiếu
                    </Text>

                    <Text
                        style={{
                        color: 'gray',
                        marginTop: 1,
                        fontSize: 17,
                        fontWeight: '500',
                        }}>
                        {' '}
                        12:00-12:45
                    </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                    width: 150,
                    height: 38,
                    borderRadius: 20,
                    backgroundColor: '#FF9999',
                    marginTop: 3,
                    marginLeft: 170,
                    }}>
                    <Text
                    style={{
                        marginTop: 8,
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'white',
                        marginLeft: 20,
                    }}>
                    Add to calendar
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

            {/* tao 1 tab calendar -end*/}

            {/* tao 1 tab calendar -end*/}

            <View
                style={{
                width: 350,
                height: 150,
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
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../assets/trhieu.jpg')}
                    style={{
                        marginTop: 20,
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
                        marginTop: 25,
                        fontSize: 17,
                        fontWeight: '500',
                        }}>
                        {' '}
                        Prof.Trung Hiếu
                    </Text>

                    <Text
                        style={{
                        color: 'gray',
                        marginTop: 1,
                        fontSize: 17,
                        fontWeight: '500',
                        }}>
                        {' '}
                        12:00-12:45
                    </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                    width: 150,
                    height: 38,
                    borderRadius: 20,
                    backgroundColor: '#FF9999',
                    marginTop: 3,
                    marginLeft: 170,
                    }}>
                    <Text
                    style={{
                        marginTop: 8,
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'white',
                        marginLeft: 20,
                    }}>
                    Add to calendar
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

            {/* tao 1 tab calendar -end*/}

            {/* tao 1 tab calendar -end*/}

            <View
                style={{
                width: 350,
                height: 150,
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
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../assets/trhieu.jpg')}
                    style={{
                        marginTop: 20,
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
                        marginTop: 25,
                        fontSize: 17,
                        fontWeight: '500',
                        }}>
                        {' '}
                        Prof.Trung Hiếu
                    </Text>

                    <Text
                        style={{
                        color: 'gray',
                        marginTop: 1,
                        fontSize: 17,
                        fontWeight: '500',
                        }}>
                        {' '}
                        12:00-12:45
                    </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                    width: 150,
                    height: 38,
                    borderRadius: 20,
                    backgroundColor: '#FF9999',
                    marginTop: 3,
                    marginLeft: 170,
                    }}>
                    <Text
                    style={{
                        marginTop: 8,
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'white',
                        marginLeft: 20,
                    }}>
                    Add to calendar
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>    
        </ScrollView>

        {/* tao 1 tab calendar -end*/}
      </View>
    </View>
  );
}

export default FindPT;