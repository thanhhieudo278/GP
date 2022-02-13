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
function PTHomeNutrition({navigation}) {
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
            Nutrition
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
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
          source={require('../assets/pancakes.png')}
          style={{
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
            Pancakes
            
          </Text>
          <Text
            style={{
              marginLeft:12,
              fontSize: 14,
              color: 'gray',
            }}>472 Kcal
          </Text>
        </View>
        <TouchableOpacity>
        <TouchableOpacity
          onPress={( )=> navigation.navigate("PTNutriCrud")}
        >
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft:135,
              marginTop:30,
              height:25,
              width:25,
            }}/>
        </TouchableOpacity>   
        </TouchableOpacity>                         
      </View>
{/* -------------------------------------------------------------------------------- */}
 
    

    </ScrollView>        
    </View>
  );
}

export default PTHomeNutrition;