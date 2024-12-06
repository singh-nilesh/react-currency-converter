import React from "react"
import { useId } from "react";

function InputBox ({
    label, 
    className="",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false, // required in Production grade App
    currencyDisable = false,
    customClassName = ""
}) {
    const amountInputId = useId()

    return ( // ${className} is for adding custom CSS class by user
        <div className={`bg-white p-3 round-lg text-sm flex m-2 ${customClassName}`}>
            
            <div className="w-1/2">
                <label className="text-black mb-2 inline-block"
                    htmlFor={amountInputId}
                    >{label}</label>
                
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-blue-100 py-1.5 rounded-xl text-black p-4"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && // first check if onAmountChange is not null, (null pointer exception),
                        onAmountChange(Number(e.target.value))} // convert string to number, to avoid errors
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select className="rounded-lg px-1 py-1 bg-gray-700 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((Currency) => // loop through the options in Currency List
                    (
                        <option key={Currency}
                        value={Currency}>
                            {Currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;