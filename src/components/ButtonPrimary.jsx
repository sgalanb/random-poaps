import React from "react"
import './ButtonPrimary.css'

export default function ButtonPrimary({text}) {
    
    return (
        <button onClick={() => {console.log('Hello')}}>{text}</button>
    )
}