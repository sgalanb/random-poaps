export const getTotalAddresses = (ids) => {
    function fetchAll() {
      const urls = [];
      for (const id of ids) {
        const templateUrl = fetch(
          `https://api.poap.xyz/event/${id}/poaps?limit=300&offset=0`
        );
        urls.push(templateUrl);
      }
      return Promise.all(urls);
    }
  
    const json = (response) =>
      Promise.all(
        response.map((response) => {
          if (response.ok) return response.json();
          throw new Error(response.error_code);
        })
      );
  
    const mapObject = (response) =>
      Promise.all(
        response.map((object) => object.tokens.map((token) => token.owner.id))
      );
  
    return fetchAll()
      .then(json)
      .then(mapObject)
      .then((response) => {
        return response.reduce((acc, av) => acc.concat(av), []);
      });
  };  