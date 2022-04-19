import React, {useContext, useState} from "react";
import './IdInput.css'
import IdContext from "../../context/IdContext";
import useMaxID from "../../hooks/useMaxID";

export default function IdInput() {
    const { addID, state } = useContext(IdContext)
    const [id, setId] = useState('')
    const [maxID] = useMaxID()
    const isRepeated = !state.listOfIDs.find(element => element == id)

    const handleSubmit = evt => {
        evt.preventDefault()
        if (!id == '' & id <= maxID) {
            if (isRepeated) {
                addID(id)
                setId('')
            } else {
                alert(`Event already added`)
            }
        } else {
            alert(`There is no events with this ID: ${id}`)
        }
    }

    const handleChange = evt => {
        setId(evt.target.value);
    }

    return (
        <form className="eventIdForm" onSubmit={handleSubmit}>
            <input className="eventIdInput" type='number' min={1} onChange={handleChange} value={id} placeholder='Event ID'/>
            <button className="eventIdDiv" >
            ADD
            </button>
        </form>
    )
}