import { useState } from "react";
import TipButton from "./components/TipButton";

function App() {
  const [bill, setBill] = useState<number | string>('')
  const [numPeople, setNumPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<number | string>('');
  const tipPercentages = [5, 10, 15, 25, 50];

  const handleReset = () => {
    setBill('');
    setTipPercentage(null);
    setCustomTip('');
    setNumPeople('');
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

  return (


    <>
      <h1 className="text-center flex flex-col text-very-dark-cyan ">S P L I <span>T T E R</span> </h1>
      <div className="bg-white rounded-lg px-8">
        <div>
          <form action="">
            <label

              className="text-dark-grayish-cyan">Bill</label>
            <div className="bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12">
              <img className="w-[9px] h-[15px]" src="/images/icon-dollar.svg" alt="" />
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="bg-very-light-grayish-cyan text-right text-very-dark-cyan font-bold text-2xl max-w-[150px]" />
            </div>
          </form>
        </div>


        <div >
          <p>select tip %</p>
          <div className="grid grid-cols-2">
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
              className="w-20 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div>
          <form action="">
            <label htmlFor="" className="text-dark-grayish-cyan">Number of people %</label>
            <div className="bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12">
              <img className="w-[13px] h-[16px]" src="/images/icon-person.svg" alt="" />
              <input
                className="bg-very-light-grayish-cyan text-right text-very-dark-cyan font-bold text-2xl max-w-[150px]"
                type="number"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
              />

            </div>
          </form>
        </div>

        <div className="bg-very-dark-cyan rounded-xl p-6">
          <div className="flex justify-between">
            <div className="">
              <p className="text-white font-bold">tip amount</p>
              <p className="text-grayish-cyan">/person</p>
            </div>
            <p className="text-3xl text-strong-cyan font-bold">${calculateTip().toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-white font-bold">total</p>
              <p className="text-grayish-cyan">/person</p>
            </div>
            <p className="text-3xl text-strong-cyan font-bold">${calculateTotal().toFixed(2)} </p>
          </div>

          <button onClick={handleReset} className="bg-strong-cyan text-center rounded-lg w-[281px] h-12">Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
