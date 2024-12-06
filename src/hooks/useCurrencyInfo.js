import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})

    // setCurrencyInfo method for the hook
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // converting to JSON
        .then((res) => setData(res[currency])) //using currency as Key

    }, [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo