import { View,Text,Image,TextInput,Button } from "react-native";
import React from "react";
import { Component } from "react";
import { UserContext } from "../HomePage/HomePage";
import { MyData } from "../UseContext/Context";
const DetailPage=({route, navigation })=>{
    const user=React.useContext(MyData)
    const {list} = route.params;
    console.log(list);
    return(
        <View>
            <Text style={{fontSize:24}}>Hello {list.username}</Text>
            <Text style={{fontSize:24}}>Email:{list.email}</Text>
            <Text style={{fontSize:24}}>Tên là:{list.name}</Text>
            <Button title="QuayLai" onPress={()=>navigation.navigate('Home')}></Button>
        </View>
    )
}
export default DetailPage