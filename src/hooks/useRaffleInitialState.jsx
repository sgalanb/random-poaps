import { useState } from 'react'

const initialState = {
  listOfIDs: [],
  winnersCount: 1,
  totalAddresses: [],
  faqActive: false,
  mustHaveAllPOAPs: false,
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addID = (payload) => {
    setState({
      ...state,
      listOfIDs: [...state.listOfIDs, payload],
    })
  }

  const removeID = (payload) => {
    setState({
      ...state,
      listOfIDs: [...state.listOfIDs.filter((e) => e !== payload)],
    })
  }

  const setContextWinners = (payload) => {
    setState({
      ...state,
      winnersCount: payload,
    })
  }

  const setTotalAddresses = (payload) => {
    setState({
      ...state,
      totalAddresses: payload,
    })
  }

  const setFaqActive = (payload) => {
    setState({
      ...state,
      faqActive: payload,
    })
  }

  const setMustHaveAllPOAPs = (payload) => {
    setState({
      ...state,
      mustHaveAllPOAPs: payload,
    })
  }

  const setInitialState = () => {
    setState(initialState)
  }

  return {
    state,
    addID,
    removeID,
    setContextWinners,
    setTotalAddresses,
    setFaqActive,
    setInitialState,
    setMustHaveAllPOAPs,
  }
}

export default useInitialState
