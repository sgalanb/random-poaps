import React, {useState, useContext} from "react";
import './WinnersInput.css'
import { ReactComponent as MinusSolid } from '../../images/minus-solid.svg';
import { ReactComponent as PlusSolid } from '../../images/plus-solid.svg';
import IdContext from "../../context/IdContext";

export default function WinnersInput({numberOfAddresses}) {
    const { setContextWinners, state } = useContext(IdContext)
    const [winners, setWinners] = useState(state.winnersCount)

    const handleChange = evt => {
        setWinners(evt.target.value);
    }

    const handlePlus = () => {
        if (winners < numberOfAddresses) {
            setContextWinners(parseInt(winners) + 1)
            setWinners(parseInt(winners) + 1)
        } else {
            alert("The number of winners is equal to the number of participants")
        }
    }

    const handleMinus = () => {
        if (winners > 1) {
            setContextWinners(parseInt(winners) - 1)
            setWinners(parseInt(winners) -1)
        }
    }

    const handleSubmit = (evt) => {
        setContextWinners(parseInt(winners))
        evt.preventDefault()
    }
    
    return (
        <form className="winnersInputForm" onSubmit={handleSubmit} >
            <input className="winnersInputInput" type='number' disabled min={1} max={numberOfAddresses} onChange={handleChange} value={winners} placeholder='Winners'/>
            <div className="WinnersInputDivBox">
                <div className="WinnersInputDivPlus" onClick={handlePlus}>
                    <div className="WinnersInputSVGPlusContainer">
                        <PlusSolid className="WinnersInputSVGPlus" />
                    </div>
                </div>
                <div className="WinnersInputDivMinus" onClick={handleMinus}>
                    <div className="WinnersInputSVGMinusContainer">
                        <MinusSolid className="WinnersInputSVGMinus" />
                    </div>
                </div>
            </div>
        </form>
    )
}