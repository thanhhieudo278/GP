import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import MyStack from "./navigation/MyStack";



const App =()=>{
 
  return(
    
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>

    
  );
}

export default App;