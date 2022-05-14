export const getTotalAddresses = (ids) => {
    async function fetchAll() {
        const urls = []
        for (const id of ids) {
            await fetch(`https://api.poap.xyz/event/${id}/poaps`)
                .then(response => {
                    if (response.ok) { return response.json() }
                    else { throw new Error(response.status) }  
                })
                .then(response => {
                    const apiLimit = 300
                    const numberOfRequests = parseInt(response.total / apiLimit) + 1

                    let i = 1
                    let offset = 0
                    while (i <= numberOfRequests) {
                        urls.push(fetch(`https://api.poap.xyz/event/${id}/poaps?limit=300&offset=${offset}`))
                        offset = offset + 300
                        i++
                    }
                })
        }
        return Promise.all(urls)
    }
  
    const json = (response) =>
        Promise.all(
            response.map((response) => {
               if (response.ok) { return response.json() }
                else { throw new Error(response.statusCode) }
            })
        )

    const mapArrayOfResponses = (response) => response.map((object) => object.tokens.map((token) => token.owner.id))

    const concatArrays = (response) => response.reduce((acc, av) => acc.concat(av), [])
  
    return fetchAll()
      .then(json)
      .then(mapArrayOfResponses)
      .then(concatArrays)
  }