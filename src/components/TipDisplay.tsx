import ButtonReset from "./ButtonReset";

type TipDisplayProps = {
    calculateTip: () => number;
    calculateTotal: () => number;
    handleReset: () => void;
    isResetDisabled: boolean;
}

export default function TipDisplay({calculateTip, calculateTotal, handleReset,isResetDisabled} : TipDisplayProps) {
    return (
        <div className="bg-very-dark-cyan rounded-xl p-6 mt-8 xl:mt-0 xl:h-[417px]">
            <div>
                <div className="flex justify-between mb-5">
                <div className="">
                    <p className="text-white font-bold text-base">Tip amount</p>
                    <p className="text-grayish-cyan text-sm">/person</p>
                </div>
                <p className="text-3xl text-strong-cyan font-bold xl:text-5xl">
                    ${calculateTip().toFixed(2)}
                </p>
                </div>

                <div className="flex justify-between">
                <div>
                    <p className="text-white font-bold text-base">Total</p>
                    <p className="text-grayish-cyan text-sm">/person</p>
                </div>
                <p className="text-3xl text-strong-cyan font-bold xl:text-5xl">
                    ${calculateTotal().toFixed(2)}{" "}
                </p>
                </div>
            </div>
            < ButtonReset 
                    handleReset={handleReset}
                    isResetDisabled={isResetDisabled}
            />

        
        </div>
    );
}
