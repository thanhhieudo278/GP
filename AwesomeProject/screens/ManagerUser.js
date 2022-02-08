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
function ManagerUser(props) {
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
          flexDirection: 'row',
          borderBottomWidth:0.5,
        }}>
        <Image
          source={require('../assets/trhieu.jpg')}
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
            Tran Trung Hieu
            
          </Text>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 25,
              color: '#6A4DFF',
            }}>
            Phone: 
          </Text>
        </View>
        <Image
            source={require('../assets/ic_pencil.png')}
            style={{
              marginLeft: 50,
              marginTop:30,
              height:25,
              width:25,

            }}/>
            
          
      </View>
    {/* ------------------------------------------------------------------ */}

    

    

              

    </ScrollView>        
    </View>
  );
}

export default ManagerUser;