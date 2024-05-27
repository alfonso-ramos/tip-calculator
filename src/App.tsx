function App() {

  const tipPercentages = [5, 10, 15, 25, 50];

  return (

    
    <>
      <h1 className="text-center flex flex-col text-very-dark-cyan ">S P L I <span>T T E R</span> </h1>
      <div className="bg-white rounded-lg px-8">
        <div>
          <form action="">
            <label htmlFor="" className="text-dark-grayish-cyan">Bill</label>
            <div className="bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12">
              <img className="w-[9px] h-[15px]" src="/images/icon-dollar.svg" alt="" />
              <input className="bg-very-light-grayish-cyan text-right text-very-dark-cyan font-bold text-2xl max-w-[150px]" type="number" />
            </div>
          </form>
        </div>


        <div >
          <p>select tip %</p>
          <div className="grid grid-cols-2">
          {tipPercentages.map((percentage) => (
            <p>{percentage}</p>
          ))}
          </div>
        </div>

        <div>
          <form action="">
            <label htmlFor="" className="text-dark-grayish-cyan">Number of people %</label>
            <div className="bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12">
              <img className="w-[13px] h-[16px]" src="/images/icon-person.svg" alt="" />
              <input className="bg-very-light-grayish-cyan text-right text-very-dark-cyan font-bold text-2xl max-w-[150px]" type="number" />
            </div>
          </form>
        </div>

        <div className="bg-very-dark-cyan rounded-xl p-6">
          <div className="flex justify-between">
            <div className="">
              <p className="text-white font-bold">tip amount</p>
              <p className="text-grayish-cyan">/person</p>
            </div>
            <p className="text-3xl text-strong-cyan font-bold">$4.56</p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-white font-bold">total</p>
              <p className="text-grayish-cyan">/person</p>
            </div>
            <p className="text-3xl text-strong-cyan font-bold">$4.56</p>
          </div>

          <button className="bg-strong-cyan text-center rounded-lg w-[281px] h-12">Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
