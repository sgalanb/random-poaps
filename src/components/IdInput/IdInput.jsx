import React, {useContext, useState} from "react";
import './IdInput.css'
import IdContext from "../../context/IdContext";

export default function IdInput() {
    const { addID, state } = useContext(IdContext)
    const [id, setId] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        const repeated = state.listOfIDs.find(element => element == id)
        if (id == '') {
            alert(`Add an event ID.`)
        } else {
            if (repeated) {
                alert(`Event already added`)
            } else {
                addID(id)
                setId('')
            }
        }
    }
        
    const handleChange = evt => {
        setId(evt.target.value);
    }

    return (
        <form className="eventIdForm" onSubmit={handleSubmit}>
            <input className="eventIdInput" type='number' min={1} onChange={handleChange} value={id} placeholder='Event ID' />
            <button className="eventIdDiv" >ADD</button>
        </form>
    )
}