import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//component = function
function ManagerHome({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 100,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 15,
          justifyContent: 'flex-start',
          marginTop: 25,
        }}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            fontWeight: '500',
            color:'#181818'
          }}>
          Manager home
        </Text>
        <View style={{flex: 1}} />
        <Image
          source={require('../assets/ic_menu.png')}
          style={{
            width: 30,
            height: 30,
            marginEnd: 20,
            tintColor: '#181818',
          }}
        />
      </View>
      <View
        style={{
          flex: 100,
          alignSelf: 'center'
        }}>
          <Image
          source={require('../assets/ICgym.jpg')}
          style={{
          }}
        />
        
      </View>
      
      <View
        style={{
          flex: 50,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>

          <TouchableOpacity
            onPress={( )=> navigation.navigate("ManagerUser")}  
            style={{
              backgroundColor: '#6666FF',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 20,
              marginVertical: 20,
              justifycontent: 'center',
              alignItems: 'center',
              width: 150,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                marginVertical: 7,
              }}>
              User
            </Text>
            
              
          </TouchableOpacity>
          <TouchableOpacity
            onPress={( )=> navigation.navigate("ManagerPT")}
            style={{
              backgroundColor: '#ef7171',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 35,
              marginVertical: 20,
              justifycontent: 'center',
              alignItems: 'center',
              width: 150,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                marginVertical: 7,
              }}>
              P.T
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

export default ManagerHome;