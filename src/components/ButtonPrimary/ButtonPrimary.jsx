import React from "react"
import './ButtonPrimary.css'
import { Link } from "wouter"

export default function ButtonPrimary({text, href}) {
    
    return (
        <Link href={href}><button className="button-primary">{text}</button></Link>
    )
}