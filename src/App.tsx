import { useState } from "react";
import TipButton from "./components/TipButton";

function App() {
  const [bill, setBill] = useState<number | string>('')
  const [numPeople, setNumPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<number | string>('');
  const tipPercentages = [5, 10, 15, 25, 50];
  const [billError, setBillError] = useState<boolean>(false);
  const [numPeopleError, setNumPeopleError] = useState<boolean>(false);

  const handleReset = () => {
    setBill('');
    setTipPercentage(null);
    setCustomTip('');
    setNumPeople('');
    setBillError(false);
    setNumPeopleError(false);
  };

  const calculateTip = (): number => {
    const tip = tipPercentage ? tipPercentage : Number(customTip);
    if (!bill || !numPeople || !tip) return 0;
    return (Number(bill) * tip) / 100 / Number(numPeople);
  };

  const calculateTotal = (): number => {
    const tip = calculateTip();
    if (!bill || !numPeople) return 0;
    return (Number(bill) + tip * Number(numPeople)) / Number(numPeople);
  };

  const handleBlur = () => {
    setBillError(!bill);
    setNumPeopleError(!numPeople);
  };

  const isResetDisabled = !bill && !tipPercentage && !customTip && !numPeople;
  return (

    <>
      <h1 className="text-center flex flex-col text-very-dark-cyan my-10 font-bold">S P L I <span>T T E R</span> </h1>
      <div className="bg-white rounded-lg px-8 py-8 max-w-[920px] mx-auto xl:grid xl:grid-cols-2 xl:gap-12 xl:mb-10">
        <div>

          <div>
            <form action="">
              <label
                className="text-dark-grayish-cyan mb-2">Bill</label>
              <div className={`bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12 hover:border-2 hover:border-strong-cyan ${billError ? 'invalid:border-red' : 'border-none'}`}>
                <img className="w-[9px] h-[15px]" src="/images/icon-dollar.svg" alt="" />
                <input
                  type="number"
                  value={bill}
                  placeholder="0"
                  className="bg-very-light-grayish-cyan text-right text-very-dark-cyan font-bold text-2xl max-w-[150px]"
                  onChange={(e) => setBill(Number(e.target.value))}
                  onBlur={handleBlur}
                />
              </div>
            </form>
          </div>



          <div className="mt-8">
            <p className="text-dark-grayish-cyan mb-4">Select tip %</p>
            <div className="grid grid-cols-2 gap-4">
              {tipPercentages.map((percentage) => (
                <TipButton
                  key={percentage}
                  percentage={percentage}
                  selected={tipPercentage === percentage}
                  onClick={() => {
                    setTipPercentage(percentage);
                    setCustomTip('');
                  }}
                />
              ))}
              <input
                type="number"
                placeholder="Custom"
                value={customTip}
                onChange={(e) => {
                  setTipPercentage(null);
                  setCustomTip(Number(e.target.value));
                }}
                className="text-right text-2xl font-bold text-very-dark-cyan bg-very-light-grayish-cyan rounded px-4 border-none hover:border-strong-cyan"
              />
            </div>
          </div>

          <div className="mt-8">
            <form action="">
              <div className="flex justify-between">
                <label htmlFor="" className="text-dark-grayish-cyan mb-2">Number of people %</label>
                {numPeopleError && <p className="text-red text-sm font-bold">Can’t be zero</p>}
              </div>
              <div className={`bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12 hover:border-2 hover:border-strong-cyan ${billError ? 'invalid:border-red' : 'border-none'} ${numPeopleError ? 'border-red' : 'border-none'}`}>
                <img className="w-[13px] h-[16px]" src="/images/icon-person.svg" alt="" />
                <input
                  className={`bg-very-light-grayish-cyan text-right text-very-dark-cyan font-bold text-2xl max-w-[150px] rounded `}
                  type="number"
                  placeholder="0"
                  value={numPeople}
                  onChange={(e) => setNumPeople(e.target.value)}
                  onBlur={handleBlur}
                />
              </div>

            </form>
          </div>
        </div>



        <div>
          <div className="bg-very-dark-cyan rounded-xl p-6 mt-8 xl:mt-0 xl:h-[417px]">
            <div> 
              <div className="flex justify-between mb-5">
                <div className="">
                  <p className="text-white font-bold text-base">Tip amount</p>
                  <p className="text-grayish-cyan text-sm">/person</p>
                </div>
                <p className="text-3xl text-strong-cyan font-bold xl:text-5xl">${calculateTip().toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-white font-bold text-base">Total</p>
                  <p className="text-grayish-cyan text-sm">/person</p>
                </div>
                <p className="text-3xl text-strong-cyan font-bold xl:text-5xl">${calculateTotal().toFixed(2)} </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-strong-cyan text-center text-very-dark-cyan font-bold rounded-lg h-12 w-full mt-8 disabled:cursor-not-allowed disabled:bg-[#0D686D] xl:mt-[192px]"
              disabled={isResetDisabled}
            >Reset
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
