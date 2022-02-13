import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    
  } from 'react-native';

import SelectWorkout from '../screens/SelectWorkout';
import HomeScreen from '../screens/HomeScreen';
import PersonalTrainer from '../screens/PersonalTrainer';
import CoreTraining from '../screens/CoreTraining';

import LookingScreen from '../screens/LookingScreen';
import FindPT from '../screens/FindPT';
import DiscoverWorkouts from '../screens/DiscoverWorkouts';
import Nutrition from '../screens/Nutrition';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import WellcomeScreen from '../screens/WellcomeScreen';
import InsightBodyScreen from '../screens/InsightBodyScreen';
import NutriInsightScreen from '../screens/NutriInsightScreen';
import AboutFoodScreen from '../screens/AboutFoodScreen';
import WorkoutBodyScreen from '../screens/WorkoutBodyScreen';
import SummaryBodyScreen from '../screens/SummaryBodyScreen';
import ChatScreen from '../screens/ChatScreen';
import PickRoleScreen from '../screens/PickRoleScreen';
import FreeScreen from '../screens/FreeScreen';
import SelectWorkoutFree from '../screens/SelectWorkoutFree';

import CoreTrainingFree from '../screens/CoreTrainingFree';

import ManagerHome from '../screens/ManagerHome';

import PTHome from '../screens/PTHome';
import ManagerUser from '../screens/ManagerUser';

import ManagerPT from '../screens/ManagerPT';



import ManagerCrudPT from '../screens/ManagerCrudPT';
import ManagerCrudUser from '../screens/ManagerCrudUser';


import PTHomeStudent from '../screens/PTHomeStudent';

import PTHomeNutrition from '../screens/PTHomeNutrition';

import PTHomeWorkout from '../screens/PTHomeWorkout';

import ProfileScreenUser from '../screens/ProfileScreenUser';
import ProfileScreen from '../screens/ProfileScreen';

import PTNutriCrud from '../screens/PTNutriCrud';

import PTWorkoutCrud from '../screens/PTWorkoutCrud';





import Tabs from './Tabs';





const Stack = createNativeStackNavigator();

const MyStackHome = () => {
     
    return (
        <Stack.Navigator 
            screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} />
                <Stack.Screen 
                    name="SelectWorkout" 
                    component={SelectWorkout} /> 
                <Stack.Screen 
                    name="CoreTraining" 
                    component={CoreTraining} />   
                <Stack.Screen 
                    name="PersonalTrainer" 
                    component={PersonalTrainer} />
                
        </Stack.Navigator>     
    );
};



const MyStackDiscorver = () => {
  return (
      <Stack.Navigator 
        screenOptions={{headerShown: false}}>
          <Stack.Screen 
              name="LookingScreen" 
              component={LookingScreen} />
          <Stack.Screen 
              name="FindPT" 
              component={FindPT} /> 
          <Stack.Screen 
              name="DiscoverWorkouts" 
              component={DiscoverWorkouts} />   
          <Stack.Screen 
              name="Nutrition" 
              component={Nutrition} />
      </Stack.Navigator>     
  );
};

const MyStackInsight = () => {
    return (
        <Stack.Navigator 
          screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="InsightBodyScreen" 
                component={InsightBodyScreen} />
            <Stack.Screen 
                name="NutriInsightScreen" 
                component={NutriInsightScreen} /> 
            <Stack.Screen 
                name="AboutFoodScreen" 
                component={AboutFoodScreen} />   
            <Stack.Screen 
                name="WorkoutBodyScreen" 
                component={WorkoutBodyScreen} />
            <Stack.Screen 
                name="SummaryBodyScreen" 
                component={SummaryBodyScreen} />    
        </Stack.Navigator>     
    );
  };

  const MyStackProfile = () => {
    return (
        <Stack.Navigator 
          screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="ProfileScreen" 
                component={ProfileScreen} />
            <Stack.Screen 
                name="ProfileScreenUser" 
                component={ProfileScreenUser} />    
        </Stack.Navigator>     
    );
  };


const MyStack = () => {
  return (
        <Stack.Navigator 
            screenOptions={{headerShown: false}}>
            <Stack.Screen
                    name="WellcomeScreen" 
                    component={WellcomeScreen}
                    />
            <Stack.Screen
                    name="PickRoleScreen" 
                    component={PickRoleScreen}
                    />

            <Stack.Screen
                    name="FreeScreen" 
                    component={FreeScreen}
                    />
            <Stack.Screen 
                    name="SelectWorkoutFree" 
                    component={SelectWorkoutFree} /> 

                <Stack.Screen 
                    name="CoreTrainingFree" 
                    component={CoreTrainingFree} />

            <Stack.Screen
                    name="SigninScreen" 
                    component={SigninScreen}
                    />
            <Stack.Screen 
                    name="SignupScreen" 
                    component={SignupScreen}
                    />
            <Stack.Screen 
                    name="ChatScreen" 
                    component={ChatScreen} 
                    />          
            <Stack.Screen 
                    name="Tabs" 
                    component={Tabs} 
                    />                       
            
            <Stack.Screen
                    name="ManagerHome"
                    component={ManagerHome}
                    />

            <Stack.Screen
                    name="ManagerUser"
                    component={ManagerUser}
                    />
            <Stack.Screen
                    name="ManagerPT"
                    component={ManagerPT}
                    />                

            <Stack.Screen
                    name="PTHome"
                    component={PTHome}
                    />        
            <Stack.Screen
                    name="ManagerCrudPT"
                    component={ManagerCrudPT}
                    />
            <Stack.Screen
                    name="ManagerCrudUser"
                    component={ManagerCrudUser}
                    />
           
            <Stack.Screen
                    name="PTHomeStudent"
                    component={PTHomeStudent}
                    />  

            <Stack.Screen
                    name="PTHomeNutrition"
                    component={PTHomeNutrition}
                    /> 

            <Stack.Screen
                    name="PTHomeWorkout"
                    component={PTHomeWorkout}
                    /> 

            <Stack.Screen
                    name="PTNutriCrud"
                    component={PTNutriCrud}
                    /> 

            <Stack.Screen
                    name="PTWorkoutCrud"
                    component={PTWorkoutCrud}
                    />         

                                                   

            
        </Stack.Navigator>     
  );
};





export {MyStackHome, MyStackDiscorver, MyStackInsight,MyStackProfile};

export default MyStack;