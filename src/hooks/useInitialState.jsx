import { useState } from "react";

const initialState = {
    listOfIDs: [],
    winnersCount: 1,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addID = (payload) => {
        setState({
            ...state,
            listOfIDs: [...state.listOfIDs, payload]
        })
    }

    const removeID = (payload) => {
        setState({
            ...state,
            listOfIDs: [...state.listOfIDs.filter(e => e !== payload)]
        })
    }

    const setContextWinners = (payload) => {
        setState({
            ...state,
            winnersCount: payload 
        })
    }

    return {
        state,
        addID,
        removeID,
        setContextWinners
    }
}

export default useInitialState