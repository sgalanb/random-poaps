// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_POAP_API_KEY

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'x-api-key': API_KEY },
}

export const getEventInfo = (id) => {
  return fetch(`https://api.poap.tech/events/id/${id}`, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then((evt) => {
      return {
        name: evt.name,
        image: evt.image_url,
      }
    })
}
