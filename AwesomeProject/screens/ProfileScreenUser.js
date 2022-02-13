import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Directions, TextInput } from 'react-native-gesture-handler';
import { Size } from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
//component = function
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { firebase, auth, db, storage } from '../firebase/config.js'
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function ProfileScreenUser() {
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

        const imageRef = "usersImage/I${phone}.png";
        // console.log(imageRef);
        getDownloadURL(ref(storage, "usersImage/I0989346696.png")).then((url) => {
            setUrl(url)
            console.log(url)
        })
        .catch((e) => {
            console.log(e)
        })

    }, [])

    // useEffect(() => {
    //     getDownloadURL(ref(storage, "usersImage/I0989346696.jpg")).then((url) => {
    //         setUrl(url)
    //         console.log(url)
    //     })
    // }, [])






    return (
        <View
            style={{
                backgroundColor: '#F0F8FF',
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
                            color: 'black',
                        }}>
                        Information
                    </Text>
                </View>
            </View>

            <View
                style={{
                    height:600,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    margin: 10,
                }}>
                <View
                    style={{
                        flexDirection: 'column',
                    }}>
                    <Image
                        source={{ uri: url }}
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 20,
                            marginLeft: 130,
                            borderRadius: 100,
                        }}
                    />
                    <View
                        style={{
                            marginLeft: 40,
                            marginTop: 20,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}>
                            Name: <Text>{name}</Text>
                        </Text>
                        
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}>
                            Phone: <Text>{phone}</Text>
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}>
                            Email: <Text>{email}</Text>
                        </Text>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

export default ProfileScreenUser;