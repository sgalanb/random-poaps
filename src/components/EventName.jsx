import React from "react";
import './EventName.css'

export default function EventName({text, url}) {
    
    return (
        <a href={url} target='_blank' rel="noreferrer">{text}</a>
    )
}