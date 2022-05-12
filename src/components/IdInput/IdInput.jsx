import React, {useContext, useState} from "react";
import './IdInput.css'
import IdContext from "../../context/IdContext";
import { toast } from 'react-toastify';

export default function IdInput() {
    const { addID, state } = useContext(IdContext)
    const [id, setId] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        const repeated = state.listOfIDs.find(element => element == id)
        if (id == '') {
            toast.info('Enter an event ID')
        } else {
            if (repeated) {
                toast.info('Event already added')
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
        <form name="IdInputForm" className="IdInputForm" onSubmit={handleSubmit}>
            <input className="IdInputInput" onChange={handleChange} value={id} placeholder='Event ID' />
            <button className="IdInputButton" >
                <p className="IdInputADD">ADD</p>
            </button>
        </form>
    )
}