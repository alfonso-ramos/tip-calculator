type BillInputProps = {
    billError: boolean;
    bill: string | number;
    setBill: React.Dispatch<React.SetStateAction<string | number>>;
    handleBlur: () => void;
}

export default function BillInput({billError, bill, setBill, handleBlur} : BillInputProps) {
    return (
        <div>
        <form action="">
            <label className="text-dark-grayish-cyan mb-2">Bill</label>
            <div
            className={`bg-very-light-grayish-cyan flex justify-between px-5 rounded-lg items-center h-12 hover:border-2 hover:border-strong-cyan ${
                billError ? "invalid:border-red" : "border-none"
            }`}
            >
            <img
                className="w-[9px] h-[15px]"
                src="/images/icon-dollar.svg"
                alt=""
            />
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
    );
}
