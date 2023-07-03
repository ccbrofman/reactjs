
import {useEffect, useState} from "react"

const useMobile =() => {
const [isMobile, setIsMobile] = useState (null)

const calcMobile = () =>{
    if (window.innerWidth <= 760){
        setIsMobile (true)
    } else {
        setIsMobile (false)
    }
}
useEffect (() => {
    calcMobile ()
    window.addEventListener ( 'resize', calcMobile)
    return () => {
        window.removeEventListener ('resize', calcMobile)
    }
})
return isMobile
}
export default useMobile