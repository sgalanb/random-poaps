import RaffleContext from 'context/RaffleContext'
import React, { useContext } from 'react'
import './MustHaveCheckBox.css'

const MustHaveCheckBox = () => {
  const { state, setMustHaveAllPOAPs } = useContext(RaffleContext)

  const handleChange = (e) => {
    setMustHaveAllPOAPs(e.target.checked === true ? true : false)
  }

  return (
    <div className="mustHaveCheckBoxContainer">
      <input
        type="checkbox"
        id="mustHaveCheckBox"
        checked={state.mustHaveAllPOAPs}
        onChange={handleChange}
      />
      <label htmlFor="mustHaveCheckBox">
        Participants must have all selected POAPs
      </label>
    </div>
  )
}
export default MustHaveCheckBox
