export const getEventInfo = (id) => {
    return fetch(`https://api.poap.xyz/events/id/${id}`)
            .then(response => {
                if (response.ok) { return response.json() }
                else { throw new Error(response.status) }
            })
            .then(evt => {
                return {
                    name: evt.name,
                    image: evt.image_url
                }
            })
}