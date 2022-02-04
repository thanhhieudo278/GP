import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectWorkout from '../screens/SelectWorkout';
import HomeScreen from '../screens/HomeScreen';
import PersonalTrainer from '../screens/PersonalTrainer';
import CoreTraining from '../screens/CoreTraining';

import LookingScreen from '../screens/LookingScreen';
import FindPT from '../screens/FindPT';
import DiscoverWorkouts from '../screens/DiscoverWorkouts';
import Nutrition from '../screens/Nutrition';





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

export {MyStackHome, MyStackDiscorver};