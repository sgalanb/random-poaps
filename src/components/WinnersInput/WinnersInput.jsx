import React, { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import './WinnersInput.css'

import RaffleContext from 'context/RaffleContext'
import { ReactComponent as MinusSolid } from 'images/minus-solid.svg'
import { ReactComponent as PlusSolid } from 'images/plus-solid.svg'
import { getTotalAddresses } from 'services/getTotalAddresses'
import { Spinner } from 'components/Spinner/Spinner'
import { useLocation } from 'wouter'

export default function WinnersInput() {
  const { setContextWinners, setTotalAddresses, state } =
    useContext(RaffleContext)
  const [loading, setLoading] = useState(false)
  const [winners, setWinners] = useState(state.winnersCount)
  const [addressesLength, setAddressesLength] = useState(100000)

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation()

  useEffect(() => {
    setLoading(true)
    getTotalAddresses(state.listOfIDs, state.mustHaveAllPOAPs).then(
      (totalAddresses) => {
        if (totalAddresses.length === 0) {
          toast.error("There's no addresses with all selected POAPs")
          setLocation('/add-events')
        } else {
          setTotalAddresses(totalAddresses)
          setAddressesLength(totalAddresses.length)
          if (totalAddresses.length < winners) {
            setContextWinners(1)
            setWinners(1)
          }
          setLoading(false)
        }
      }
    )
  }, [])

  const handlePlus = () => {
    if (winners < addressesLength - 1) {
      setContextWinners(parseInt(winners) + 1)
      setWinners(parseInt(winners) + 1)
    } else {
      toast.info('The number of winners is equal to the number of participants')
    }
  }

  const handleMinus = () => {
    if (winners > 1) {
      setContextWinners(parseInt(winners) - 1)
      setWinners(parseInt(winners) - 1)
    }
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="winnersInputContainer">
          <div className="winnersInputDivNumber">
            <p className="winnersNumber">{winners} </p>
          </div>
          <div className="WinnersInputDivPlusMinus">
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
        </div>
      )}
    </>
  )
}
