import { useState } from "react";
import TipDashboard from './components/TipDashboard';
import AmountPeopleInput from "./components/AmountPeopleInput";
import TipDisplay from "./components/TipDisplay";
import BillInput from "./components/BillInput";

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

          <BillInput 
                billError={billError}
                bill={bill}
                setBill={setBill}
                handleBlur={handleBlur}
          />

          <TipDashboard 
                tipPercentages={tipPercentages}
                tipPercentage={tipPercentage}
                setTipPercentage={setTipPercentage}
                setCustomTip={setCustomTip}
                customTip={customTip}
          />

          <AmountPeopleInput 
              numPeopleError={numPeopleError}
              billError={billError}
              numPeople={numPeople}
              setNumPeople={setNumPeople}
              handleBlur={handleBlur}
          />
        </div>
          <TipDisplay 
                calculateTip={calculateTip}
                calculateTotal={calculateTotal}
                handleReset={handleReset}
                isResetDisabled={isResetDisabled}
          />
        <div>
        </div>
      </div>
    </>
  )
}

export default App
