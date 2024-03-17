import { useEffect, useState } from "react"

function useCurrencyRate(currency) {

  const [data, setData] = useState({})
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/${currency}.json`

    fetch(url).then((response) => response.json())
      .then((response) => setData(response[currency]))
  }, [currency])

  return data;

}

export default useCurrencyRate;