// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_POAP_API_KEY

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'x-api-key': API_KEY },
}

export const getLastEventID = () => {
  return fetch('https://api.poap.tech/top-3-events', options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then((response) => response.mostRecent.id)
}
