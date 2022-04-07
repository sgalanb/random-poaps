import React, {useState} from "react";
import './IdInput.css'

export default function IdInput() {
    const [Id, setId] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        if (!Id == '') {
            console.log('Tiene número')
        }
    }

    const handleChange = evt => {
        setId(evt.target.value);
    }

    return (
        <form className="eventIdForm" onSubmit={handleSubmit}>
            <input className="eventIdInput" type='number' onChange={handleChange} value={Id} placeholder='Event ID'/>
            <div className="eventIdDiv" onClick={handleSubmit}>
                <p className="EventIdP">ADD</p>
            </div>
        </form>
    )
}