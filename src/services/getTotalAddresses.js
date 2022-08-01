export const getTotalAddresses = (ids, mustHaveAllPOAPs) => {
  async function fetchAll() {
    const urls = []
    for (const id of ids) {
      await fetch(`https://api.poap.xyz/event/${id}/poaps`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response.status)
          }
        })
        .then((response) => {
          const apiLimit = 300
          const numberOfRequests = parseInt(response.total / apiLimit) + 1

          let i = 1
          let offset = 0
          while (i <= numberOfRequests) {
            urls.push(
              fetch(
                `https://api.poap.xyz/event/${id}/poaps?limit=300&offset=${offset}`
              )
            )
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
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusCode)
        }
      })
    )

  const mapArrayOfResponses = (response) =>
    response.map((object) =>
      object.tokens.map((token) =>
        token.owner.ens ? token.owner.ens : token.owner.id
      )
    )

  const concatArrays = (response) =>
    response.reduce((acc, av) => acc.concat(av), [])

  const totalAddressesWithAllPOAPs = (array) => {
    // Get how many times a value appears in an array
    function getRepeatedNumber(array, value) {
      return array.filter((v) => v === value).length
    }

    const totalAddressesThatHaveAllPOAPs = []
    array.forEach(
      (address) =>
        getRepeatedNumber(array, address) === ids.length &&
        totalAddressesThatHaveAllPOAPs.push(address)
    )
    return deleteRepeated(totalAddressesThatHaveAllPOAPs)
  }

  const deleteRepeated = (response) => {
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    function deleteRepeatedFunction(a) {
      var prims = { boolean: {}, number: {}, string: {} },
        objs = []

      return a.filter(function (item) {
        var type = typeof item
        if (type in prims)
          // eslint-disable-next-line no-prototype-builtins
          return prims[type].hasOwnProperty(item)
            ? false
            : (prims[type][item] = true)
        else return objs.indexOf(item) >= 0 ? false : objs.push(item)
      })
    }
    return deleteRepeatedFunction(response)
  }

  return fetchAll()
    .then(json)
    .then(mapArrayOfResponses)
    .then(concatArrays)
    .then(
      mustHaveAllPOAPs
        ? totalAddressesWithAllPOAPs
        : (response) => deleteRepeated(response)
    )
}
