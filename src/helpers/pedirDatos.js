
import React from "react"
import MOCK_DATA from '../components/Data/MOCK_DATA.json';


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}
