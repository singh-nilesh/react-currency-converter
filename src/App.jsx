import { useState } from 'react'
import InputBox from './InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from) // default to USD

  const options = Object.keys(currencyInfo) // reweaving, all keys (country codes)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount) 
  }
  
  const convert = () =>{
    let val = amount * currencyInfo[to]
    setConvertedAmount(Number(val))
  }
  return (
    <div className='w-screen h-screen flex flex-wrap justify-center 
          items-center bg-cover bg-no-repeat m'
          style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/09/23/96/30/360_F_923963097_e7tIJOoQFNQjO3gNQBq9aGul1wFNabnM.jpg')`,
          }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60
              rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
            >
              <div className='w-full mb-1'>
                <InputBox
                    label='From'
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount) => {setAmount(amount)}}
                />
                
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                
                <InputBox
                    label='To'
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setAmount(amount)}
                    selectCurrency={to}
                    onAmountChange={(amount) => {setAmount(amount)}}
                />

                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default App
