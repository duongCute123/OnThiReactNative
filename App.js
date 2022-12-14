import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground } from 'react-native';
import HomePage from './component/HomePage/HomePage';
import DetailPage from './component/DetailPage/DetailPage';
const Stack = createNativeStackNavigator()
import Context from './component/UseContext/Context';
import UploadScree from './component/UploadImage/uploadimage';
import AddSinhVien from './component/AddData/addstudent';
import React from 'react';
import Animation from './component/Animation/animation';
const App = () => {
  return (
    <View>
      {/* <ImageBackground source={require('./assets/icon.png')} style={{height:600}}>
        <UploadScree />
      </ImageBackground> */}
      <Context>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomePage} />
            <Stack.Screen name='detailpage' component={DetailPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context>
    </View>
  )
}
export default App
