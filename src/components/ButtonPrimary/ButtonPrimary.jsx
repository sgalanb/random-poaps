import React from "react"
import './ButtonPrimary.css'
import { Link } from "wouter"

export default function ButtonPrimary({text, href = '/', clickFunction = () => {}}) {
    
    return (
        <Link href={href} onClick={clickFunction}><button className="button-primary">{text}</button></Link>
    )
}