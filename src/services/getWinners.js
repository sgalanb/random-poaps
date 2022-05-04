export const getWinners = (totalAddresses, winnersCount) => {
    let winnersArray = []
    let i = 1
    while (i <= winnersCount ) {
        const oneNumber = Math.floor(Math.random() * (totalAddresses.length - 1))
        const winnerAddress = totalAddresses[oneNumber]
        const alreadyWinner = winnersArray.find(element => element == winnerAddress)
        if (alreadyWinner == undefined) {
            winnersArray.push(winnerAddress)
            i++
        }
    }
    return Promise.all(winnersArray)
}