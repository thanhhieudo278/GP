import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { firebase, auth, db, storage } from '../firebase/config.js'
//component = function
function PTHome({navigation}) {
  const LogOut = () => {
    signOut(auth).then(() => {
        //i dont know how to navigate :>
        navigation.navigate("SigninScreen")
    }).catch((error) => {
        alert(error)
    });
}
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
            fontWeight: 'bold',
          }}>P.T home
        </Text>
        <View style={{flex: 1}} />
        <Image
          source={require('../assets/ic_menu.png')}
          style={{
            width: 30,
            height: 30,
            marginEnd: 20,
            tintColor: 'black',
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
          flexDirection:'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>

          <TouchableOpacity
            onPress={( )=> navigation.navigate("PTHomeWorkout")}  
            style={{
              backgroundColor: '#6666FF',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 30,
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
              Workouts
            </Text>
                
          </TouchableOpacity>
          <TouchableOpacity
            onPress={( )=> navigation.navigate("PTHomeNutrition")}
            style={{
              backgroundColor: '#00ba88',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 10,
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
              Nutrition
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            marginVertical: 10,
          }}>

          <TouchableOpacity
            onPress={( )=> navigation.navigate("PTHomeStudent")}  
            style={{
              backgroundColor: '#fa8e77',
              borderRadius: 20,
              height: 50,
              
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
            Students
            </Text>
                
          </TouchableOpacity>
          <TouchableOpacity
            onPress={LogOut}
            style={{
              backgroundColor: '#d70606',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 40,
              justifycontent: 'center',
              alignItems: 'center',
              flexDirection:'row',
              width: 150,
            }}>
            <Text
              style={{
                color: '#f2f2fe',
                fontSize: 23,
                marginLeft: 24,
                marginBottom:5,
              }}>
             Logout
            </Text>
            <Image
            source={require('../assets/ic_logout.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              marginLeft: 8,
              marginBottom:4,
            }}
            /> 
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PTHome;