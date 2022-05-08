export const getLastEventID = () => {
    return fetch('https://api.poap.xyz/top-3-events')
            .then(response => {
                if (response.ok) { return response.json() }
                else { throw new Error(response.status) }
            })
            .then(response => response.mostRecent.id)
}