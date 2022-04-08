import React, {useState} from "react";
import './WinnersInput.css'
import { ReactComponent as MinusSolid } from '../../images/minus-solid.svg';
import { ReactComponent as PlusSolid } from '../../images/plus-solid.svg';

export default function WinnersInput() {
    const [winners, setWinners] = useState(1)

    let numberOfAddresses = 10

    const handlePlus = () => {
        if (winners < numberOfAddresses) {
            setWinners(parseInt(winners + 1))
        } else {
            alert("The number of winners is equal to the number of participants")
        }
    }

    const handleMinus = () => {
        if (winners > 1) {
            setWinners(parseInt(winners - 1))
        }
    }

    const handleChange = evt => {
        setWinners(evt.target.value);
    }
    
    return (
        <form className="winnersInputForm" >
            <input className="winnersInputInput" type='number' min={1} max={numberOfAddresses} onChange={handleChange} value={winners} placeholder='Winners'/>
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