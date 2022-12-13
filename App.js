import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from './component/HomePage/HomePage';
import DetailPage from './component/DetailPage/DetailPage';
const Stack = createNativeStackNavigator()
import Context from './component/UseContext/Context';
import UploadScree from './component/UploadImage/uploadimage';
import React from 'react';
const App = () => {
  return (
    <View>
      <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/loginreactnative-e75d1.appspot.com/o/Xu%E1%BA%A5t%20h%C3%B3a%20%C4%91%C6%A1n.jpg?alt=media&token=742bf652-77df-47c8-b978-276d09709109'}} style= {{ height:50, width: 50 }}></Image>
      <UploadScree />
    </View>
  )
}
export default App
