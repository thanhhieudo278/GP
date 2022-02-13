import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import MyStack from "./navigation/MyStack";

console.disableYellowBox = true;

const App =()=>{
 
  return(
    
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

    
  );
}

export default App;