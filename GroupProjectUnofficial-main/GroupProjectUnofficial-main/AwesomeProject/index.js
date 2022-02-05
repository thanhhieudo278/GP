/**
 * @format
 */


import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import MainScreen from './screens/MainScreen'
import SelectWorkout from './screens/SelectWorkout'
import WellcomeScreen from './screens/WellcomeScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'

import DiscoverWorkouts from './screens/DiscoverWorkouts'
import FindPT from './screens/FindPT'
import Nutrition from './screens/Nutrition'
import CoreTraining from './screens/CoreTraining'
import LookingScreen from './screens/LookingScreen'
import ProfileScreen from './screens/ProfileScreen'
import InsightScreen from './screens/InsightScreen'


AppRegistry.registerComponent(appName,() => App);

// AppRegistry.registerComponent(appName,() => InsightScreen);




