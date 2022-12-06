import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from './component/HomePage/HomePage';
import DetailPage from './component/DetailPage/DetailPage';
const Stack = createNativeStackNavigator()
import Context from './component/UseContext/Context';
import React from 'react';
const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen name='detailpage' component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  )
}
export default App
