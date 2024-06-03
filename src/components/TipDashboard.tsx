import TipButton from "./TipButton";

type TipDashboardProps = {
    tipPercentages: number[];
    tipPercentage: number | null;
    setTipPercentage: React.Dispatch<React.SetStateAction<number | null>>;
    setCustomTip: React.Dispatch<React.SetStateAction<string | number>>;
    customTip: string | number;
};

export default function TipDashboard({ tipPercentages, tipPercentage, setTipPercentage, setCustomTip, customTip }: TipDashboardProps) {
    return (
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
                setCustomTip("");
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
    );
}
