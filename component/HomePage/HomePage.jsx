import React, { createContext } from "react";
import { Component } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { MyData } from "../UseContext/Context";
import DetailPage from "../DetailPage/DetailPage";
const image = { uri: "https://reactjs.org/logo-og.png" };
const HeaderPage = () => {
    return (
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
                <FontAwesome name="video-camera" size={24} color="white" />
                <Text>Home</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <FontAwesome name="video-camera" size={24} color="white" />
                <Text>Show All</Text>
            </View>
        </View>
    )
}
const HomePage = ({ route, navigation }) => {
    const { list } = React.useContext(MyData)
    return (
        <View style={{flex:1}}>
            <ImageBackground resizeMode="cover" source={image}>
                <HeaderPage />
                <Text>Chào bạn đến với trang HomePagre nhá</Text>
                <Button title="DetailPage" onPress={() => navigation.navigate('detailpage')}></Button>
                <View>
                    {
                        list.map((list) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('detailpage',{
                                list:list
                            })}>
                                <Text>{list.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ImageBackground>
        </View>
    )
}
export default HomePage