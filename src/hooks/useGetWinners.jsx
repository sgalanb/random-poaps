import { useContext } from "react"
import IdContext from "../context/IdContext"
import useGetParticipants from "./useGetParticipants"

const useGetWinners = () => {
    const { state } = useContext(IdContext)
    const finalArray = useGetParticipants()

    let winnersArray = []

    setTimeout(() => {
        if (!finalArray.length == 0) {
            let i = 1
            while (i <= state.winnersCount ) {
                const oneNumber = Math.floor(Math.random() * (finalArray.length - 1))
                const winnerAddress = finalArray[oneNumber]
                const alreadyWinner = winnersArray.find(element => element == winnerAddress)
                if (alreadyWinner == undefined) {
                    winnersArray.push(winnerAddress)
                    i++
                } else {console.log('repetido');}
            }
        } else {
            alert('Error with POAP API')
        }
    }, 3600);

    return winnersArray
}

export default useGetWinners