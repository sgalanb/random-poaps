import { useContext } from 'react';
import IdContext from '../context/IdContext';

const useGetParticipants = () => {
    const { state } = useContext(IdContext)
    const finalArray = []
    state.listOfIDs.forEach(id => {
        const apiURL = `https://api.poap.xyz/event/${id}/poaps?limit=300&offset=0`
        fetch(apiURL)
                .then(response => response.json())
                .then(response => {
                    const tokensArray = response.tokens
                    const addressesArray = tokensArray.map(token => token.owner.id)
                    addressesArray.forEach(address => finalArray.push(address))
                })
                .catch((error) => {
                    console.log(`Fetch error: ${error.message}`)
        })
    })
    return finalArray
}

export default useGetParticipants