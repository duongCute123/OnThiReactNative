import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
const AddSinhVien = () => {
    const [fullname, setFirstname] = useState("")
    const [age, setemail] = useState("")
    const [avatar, setImages] = useState("")
    const upload = (e) => {
        e.preventDefault()
        axios.post('https://633e2bdbc235b0e5751fe7a6.mockapi.io/getSinhVien', fullname, age, avatar)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <View>
            <Text>Đấy là trang thêm thông tin sinh viên nhá các bạn</Text>
            <Text>Nhập tên đầy đủ của bạn nhá</Text>
            <TextInput placeholder="Vui lòng nhập tên" value={fullname} onChangeText={(text) => setFirstname(text)}></TextInput>
            <Text>Nhập tên đầy đủ của bạn nhá</Text>
            <TextInput placeholder="Vui lòng nhập tên"  value={age} onChangeText={(text) => setemail(text)}></TextInput>
            <Text>Nhập tên đầy đủ của bạn nhá</Text>
            <TextInput placeholder="Vui lòng nhập tên" value={avatar} onChangeText={(text) => setImages(text)}></TextInput>
            <Button title="Thêm sinh viên" onPress={upload}></Button>
        </View>
    )
}
export default AddSinhVien