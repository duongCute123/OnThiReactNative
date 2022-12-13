import React from "react";
import { useRef, useState, useEffect } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native";
const Animation=() => {
    const topMotion=useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(
            topMotion,
            {
                toValue:600,
                duration:10000
            }
        ).start()
    },[])
    return (
        <View style={{ flex: 1}}>
            <Animated.View style={{marginTop:topMotion,backgroundColor:"blue",width:150,height:150}}></Animated.View>
        </View>
    )
}
export default Animation