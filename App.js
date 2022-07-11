import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StarMapScreen from "./screens/StarMap";
import SpaceCraftScreen from "./screens/SpaceCraft";
import DailyPicScreen from "./screens/DailyPic";
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="home" screenOptions={{
      headerShown:false 
    }}>
    <Stack.Screen name="Home"component ={HomeScreen}/>
     <Stack.Screen name="StarMap"component ={StarMapScreen}/>
      <Stack.Screen name="SpaceCraft"component ={SpaceCraftScreen}/>
       <Stack.Screen name="DailyPic"component ={DailyPicScreen}/>
     </Stack.Navigator>

    
    
   </NavigationContainer>
  );
}

