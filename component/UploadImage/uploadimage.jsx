import React from "react";
import { View,Text,Image,TouchableOpacity,Button, Alert} from "react-native";
import {firebase} from "../Config/config"
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"
const UploadScree=()=>{
    const [image,setImage]=useState(null)
    const [upload,setUpload]=useState(false)
    const pickImage=async()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        const source={uri:result.uri}
        console.log(source);
        setImage(source)
    }
    const  uploadImage=async()=>{
        setUpload(true)
        const response=await fetch(image.uri)
        const blod=await response.blob()
        const firstname=image.uri.substring(image.uri.lastIndexOf('/')+1)
        var ref=firebase.storage().ref().child(firstname).put(blod)
        try {
            await ref;
        } catch (error) {
            console.log(error);
        }
        setUpload(false)
        Alert.alert("lỗi up load")
        setImage(null)
    }
    return(
        <View style={{marginTop:40}}>
            <TouchableOpacity onPress={pickImage}>
            <Text>
                Chọn ảnh nhá
            </Text>
            </TouchableOpacity>
            <View>
                {image && <Image source={{uri:image.uri}} style= {{ height:50, width: 50 }}></Image>}
                <TouchableOpacity onPress={uploadImage}>
                    <Text>Upload Image</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default UploadScree