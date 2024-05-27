function App() {


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
            <div>
              5
            </div>
            <div>
              10
            </div>
            <div>
              15
            </div>
            <div>
              25
            </div>
            <div>
              50
            </div>
            <div>
              Custom
            </div>
          </div>
        </div>

        <div>
          <p>number of people</p>
          <form action="">
            <label htmlFor="">Bill</label>
            <div className="bg-very-light-grayish-cyan flex justify-between mx-8 px-5">
              <img src="/images/icon-person.svg" alt="" />
              <input className="bg-very-light-grayish-cyan" type="text" />
            </div>
          </form>
        </div>

        <div className="bg-very-dark-cyan rounded-xl">
          <div className="flex">
            <div className="">
              <p>tip amount</p>
              <p>//person</p>
            </div>
            <p>$4.56</p>
          </div>

          <div className="flex">
            <div>
              <p>total</p>
              <p>//person</p>
            </div>
            <p>$4.56</p>
          </div>

          <button className="bg-strong-cyan">Reset</button>
        </div>




      </div>
    </>
  )
}

export default App
