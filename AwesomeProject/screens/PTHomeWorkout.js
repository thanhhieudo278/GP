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
function PTHomeWorkout({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
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
              color:'#111111',
            }}>
            Workouts
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
              color: '#7b58c1',
            }}>
            August 22, 2022
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
              color: '#111111',
            }}>
            All
          </Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../assets/ic_search.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft:200,
              marginTop: 15,
              
            }}
          />
        </TouchableOpacity>  
      </View>

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
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTWorkoutCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
     
<View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
          // onPress={( )=> navigation.navigate("PTCrudWorkout")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
<View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
          // onPress={( )=> navigation.navigate("PTCrudWorkout")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
<View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
          // onPress={( )=> navigation.navigate("PTCrudWorkout")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
<View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
          // onPress={( )=> navigation.navigate("PTCrudWorkout")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
<View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
          // onPress={( )=> navigation.navigate("PTCrudWorkout")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
<View
        style={{
          width:"90%",
          height:100,
          marginLeft:20,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/ic_pushup.png')}
          style={{
            backgroundColor:'#e0dbff',
            width: 70,
            height: 70,
            marginLeft: 10,
            marginTop: 15,
            borderRadius:40,
            
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              fontWeight: '500',
              color: 'black',
              fontSize:20,
            }}>
            Core Training
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>Duration: 30min
          </Text>
        </View>
        
        <TouchableOpacity
         
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:80,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>                              
      </View>
{/* -------------------------------------------------------------------------------- */}
     
    </ScrollView>
    <TouchableOpacity
          onPress={( )=> navigation.navigate("PTWorkoutCrud")}
          style={{
            backgroundColor: '#4444ff',
            borderRadius: 20,
            height: 55,
            width:150,
            marginVertical: 30,
            marginLeft:120,
            
            justifycontent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
              marginVertical: 10,
            }}>
            Create
          </Text>
        </TouchableOpacity>    
    </View>
  );
}

export default PTHomeWorkout;