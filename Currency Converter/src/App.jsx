import { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import useCurrencyRate from './hooks/useCurrencyRate'
function App() {

  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [convertText, setConvertText] = useState('Convert');

  const data = useCurrencyRate(from);

  const convert = () => {
    const currencyValue = data[to];
    const result = currencyValue * amount;
    setConvertedAmount(result)
  }

  const swap = () => {
    setTo(from)
    setFrom(to)
    convert();
  }
  return <>

    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundColor: '#454545'
      }}
    >
      <h1 className='text-2xl font-bold text-white'>Currency Converter</h1>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"

                currency={from}
                onAmountChange={(value) => (setAmount(value))}
                amountDisabled={false}

                currencyOptions={Object.keys(data)}
                onCurrencyChange={(currenC) => setFrom(currenC)}


              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currency={to}
                currencyOptions={Object.keys(data)}
                amountDisabled={true}
                onCurrencyChange={(currenC) => setTo(currenC)}

              />
            </div>
            <button type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>

  </>


}

export default App
