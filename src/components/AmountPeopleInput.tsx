type AmountPeopleInputProps = {
    numPeopleError: boolean;
    billError: boolean;
    numPeople: string;
    setNumPeople: React.Dispatch<React.SetStateAction<string>>;
    handleBlur: () => void;

}


export default function AmountPeopleInput({numPeopleError, billError, numPeople, setNumPeople, handleBlur} : AmountPeopleInputProps) {
    return (
        <div className="mt-8">
        <form action="">
            <div className="flex justify-between">
            <label htmlFor="" className="text-dark-grayish-cyan mb-2">
                Number of people %
            </label>
            {numPeopleError && (
                <p className="text-red text-sm font-bold">Can’t be zero</p>
            )}
            </div>
            <div
            className={`bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12 hover:border-2 hover:border-strong-cyan ${
                billError ? "invalid:border-red" : "border-none"
            } ${numPeopleError ? "border-red" : "border-none"}`}
            >
            <img
                className="w-[13px] h-[16px]"
                src="/images/icon-person.svg"
                alt=""
            />
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
    );
}
