
import {React} from "react"
import MOCK_DATA from '../components/Data/MOCK_DATA.json'
// import {image} from "image.js"



export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}
