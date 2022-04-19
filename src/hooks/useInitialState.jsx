import { useState } from "react";

const initialState = {
    listOfIDs: [],
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
        console.log(state)
    }

    return {
        state,
        addID,
        removeID
    }
}

export default useInitialState