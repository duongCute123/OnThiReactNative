import { createContext, useState } from 'react';
import axios from 'axios';
import React from 'react';
export const MyData = createContext();
const Context = ({ children }) => {
    const [list, useList] = React.useState([])
    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                useList(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <MyData.Provider value={{list}}>
            {children}
        </MyData.Provider>
    )
}

export default Context