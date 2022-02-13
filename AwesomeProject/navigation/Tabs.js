import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  
} from 'react-native';







import DiscoverWorkouts from '../screens/DiscoverWorkouts'

import Nutrition from '../screens/Nutrition'
import HomeScreen from '../screens/HomeScreen'
import LookingScreen from '../screens/LookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WellcomeScreen from '../screens/WellcomeScreen';




import {
  MyStackHome,
  MyStackDiscorver,
  MyStackInsight,
  MyStackProfile,
} from './MyStack';


const Tab = createBottomTabNavigator();






const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top:-2,
      justifyContent:'center',
      alignItems:'center',

    }}
    onPress={onPress}
    >

      <View 
        style={{
          width:48,
          height:48,
          borderRadius:35,
          backgroundColor:'#8883f0',
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 1.44,
          shadowRadius: 2.5,

          elevation: 2,

        }}>
          {children}
      </View>

    </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator      
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        
        tabBarHideOnKeyboard: 'true',
        tabBarStyle: { 
            flexDirection: 'row',
            position: 'absolute',
            width: '85%',
            height: 60,
            marginHorizontal: 30,
            marginVertical:30,
            borderRadius:40, 
            
        }  
      }}>    
        <Tab.Screen 
          name="HomeScreen" 
          component={MyStackHome}
          options={{ 
            tabBarIcon: ({focused}) =>(
              <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',                  
              }}>    
                <Image 
                  source={require('../assets/ic_home.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused ? '#8883f0' : 'black',
                  }}
                /> 
                <Text
                  style={{
                    color: focused ? '#8883f0' : 'black',
                    fontSize:12,
                    fontWeight:'500',
                  }}>Home</Text>
              </View>
            ),
          }}
          
        
        
        
        />
       
        <Tab.Screen name="Discover" component={MyStackDiscorver} options={{
            tabBarIcon: ({focused}) =>(
              <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',                  
              }}>    
                <Image 
                  source={require('../assets/ic_dashboard.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused ? '#8883f0' : 'black',
                  }}
                /> 
                <Text
                  style={{
                    color: focused ? '#8883f0' : 'black',
                    fontSize:12,
                    fontWeight:'500',
                  }}>Discover</Text>
              </View>    
          ),
        }}
        />

        <Tab.Screen name="Post" component={HomeScreen} options={{
            tabBarIcon: ({focused}) =>(   
                <Image 
                  source={require('../assets/ic_plus.png')}
                  resizeMode='contain'
                  style={{
                    width:22,
                    height:22,
                    tintColor:'#FFFFFF',
                  }}
                />    
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} />
            )

            

          }}
        />

        <Tab.Screen name="Insights" component={MyStackInsight} options={{
            tabBarIcon: ({focused}) =>(
              <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom:3,                  
              }}>    
                <Image 
                  source={require('../assets/ic_insight.png')}
                  resizeMode='contain'
                  style={{
                    width:25,
                    height:25,
                    tintColor: focused ? '#8883f0' : 'black',
                  }}
                /> 
                <Text
                  style={{
                    color: focused ? '#8883f0' : 'black',
                    fontSize:12,
                    fontWeight:'500',
                  }}>Insights</Text>
              </View>    
          ),
        }} />
        <Tab.Screen name="Profile" component={MyStackProfile} 
            options={{
            tabBarIcon: ({focused}) =>(
              <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',                  
              }}>    
                <Image 
                  source={require('../assets/ic_profile.png')}
                  resizeMode='contain'
                  style={{
                    width:20,
                    height:20,
                    tintColor: focused ? '#8883f0' : 'black',
                  }}
                /> 
                <Text
                  style={{
                    color: focused ? '#8883f0' : 'black',
                    fontSize:12,
                    fontWeight:'500',
                  }}>Profile</Text>
              </View>    
          ),
        }}/>

        


    </Tab.Navigator>
  );
}



export default Tabs


