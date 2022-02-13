import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Directions, TextInput} from 'react-native-gesture-handler';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { firebase, auth, db, storage } from '../firebase/config.js'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

//component = function
function ProfileScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    else {
                        setEmail(firestoreDocument.data().email)
                        setName(firestoreDocument.data().fullName)
                        setPhone(firestoreDocument.data().phoneNumber)
                    }
                })
        })

        // const imageRef = "usersImage/I${phone}.png";
        // console.log(imageRef);
        getDownloadURL(ref(storage, "usersImage/I0989346696.png")).then((url) => {
            setUrl(url)
            console.log(url)
        })
        .catch((e) => {
            console.log(e)
        })

    }, [])


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
        backgroundColor: '#f7fafe',
        flex: 100,
      }}>
      <TouchableOpacity
        onPress={( )=> navigation.navigate("ProfileScreenUser")}
        style={{
          flexDirection: 'row',
          height: 100,
          backgroundColor: "white",
          justifyContent: 'flex-start',
          borderBottomWidth: 0.5,
          
        }}>
          <View style={{flexDirection: 'column',}}>  
            <Text
              style={{
                marginTop: 25,
                fontSize: 25,
                marginLeft: 20,
                fontWeight: '500',
                color: 'black',
              }}>
              Hello, {name}
            </Text>
            <Text
                style={{
                fontSize: 15,
                marginLeft: 20,
                fontWeight: '500',
              }}>
                Phone number: {phone}
            </Text>
          </View>

      </TouchableOpacity>
      <View
        style={{
          flex: 60,
          width: '90%',
          margin:20,
          marginTop: 25,
          borderRadius:20,
          shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                elevation: 15,
        }}>
          <Image
            source={require('../assets/ex_chartbody.png')}
              style={{
                borderRadius:20,
                width:'100%',
                height:'100%',
                  
              }}
              >
          </Image>
      </View>


      <View 
        style={{
          flexDirection:'row',
          flex: 50,
          margin:20,
          marginTop:5,
        }}>

        <View
          style={{
            flex: 50,
            width: '90%',

            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

          elevation: 15,
          }}>
            <Image
                source={require('../assets/ex_heartrate.png')}
                style={{
                  borderRadius:20,
                  width:'100%',
                  height:'100%',
                    
                }}
              ></Image>
        </View>

        <View style={{flex:10}}></View> 

        <View
          style={{
            flex: 50,
            backgroundColor: 'yellow',
            width: '90%',
            
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

          elevation: 15,
          }}>
              <Image
                source={require('../assets/ex_sleepcycle.png')}
                style={{
                  borderRadius:20,
                  width:'100%',
                  height:'100%',
                    
                }}
              >
          </Image> 
        </View>
      </View>      


      <View
        style={{
          flex: 50,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignContent:'center',
            justifyContent:'center',
            
          }}>
          <TouchableOpacity
            onPress={LogOut}
            style={{
              backgroundColor: '#d70606',
              borderRadius: 30,
              height: 50,
              marginHorizontal: 20,
              marginVertical: 10,
              alignItems: 'center',
              width:'40%',
              flexDirection:'row',
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

export default ProfileScreen;