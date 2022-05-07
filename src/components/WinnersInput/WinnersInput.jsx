import React, {useState, useContext, useEffect} from "react";
import './WinnersInput.css'
import { ReactComponent as MinusSolid } from '../../images/minus-solid.svg';
import { ReactComponent as PlusSolid } from '../../images/plus-solid.svg';
import IdContext from "../../context/IdContext";
import { getTotalAddresses } from "../../services/getTotalAddresses";
import { Spinner } from "../Spinner/Spinner";

export default function WinnersInput() {
    const { setContextWinners, setTotalAddresses, state } = useContext(IdContext)
    const [loading, setLoading] = useState(false)
    const [winners, setWinners] = useState(state.winnersCount)
    const [addressesLength, setAddressesLength] = useState(100000)

    useEffect(() => {
        setLoading(true)
        getTotalAddresses(state.listOfIDs)
            .then((totalAddresses) => {
                setTotalAddresses(totalAddresses)
                setAddressesLength(totalAddresses.length)
                setLoading(false)
            })
    }, [])

    const handleChange = evt => {
        setWinners(evt.target.value);
    }

    const handlePlus = () => {
        if (winners + 1 < addressesLength) {
            setContextWinners(parseInt(winners) + 1)
            setWinners(parseInt(winners) + 1)
        } else {
            alert("The number of winners is equal to the number of participants")
            setWinners(addressesLength - 1)
            setContextWinners(addressesLength - 1)
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
        <>
        {loading 
            ? (<Spinner />) 
            : (
                <form className="winnersInputForm" onSubmit={handleSubmit} >
                    <input className="winnersInputInput" type='number' disabled min={1} max={addressesLength} onChange={handleChange} value={winners} placeholder='Winners'/>
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
        </>
    )
}