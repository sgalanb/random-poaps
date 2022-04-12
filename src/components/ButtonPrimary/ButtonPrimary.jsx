import React from "react"
import './ButtonPrimary.css'

export default function ButtonPrimary({text, action}) {
    
    return (
        <button onClick={action}>{text}</button>
    )
}