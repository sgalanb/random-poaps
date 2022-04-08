import React, {useState} from "react";
import './IdInput.css'

export default function IdInput() {
    const [id, setId] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        if (!id == '' & id < 99999 & id > 0) {
            console.log('Tiene número')
        }
    }

    const handleChange = evt => {
        setId(evt.target.value);
    }

    return (
        <form className="eventIdForm" onSubmit={handleSubmit}>
            <input className="eventIdInput" type='number' min={1} max={99999} onChange={handleChange} value={id} placeholder='Event ID'/>
            <div className="eventIdDiv" onClick={handleSubmit}>
                <p className="EventIdP">ADD</p>
            </div>
        </form>
    )
}