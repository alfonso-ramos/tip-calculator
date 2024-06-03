type ButtonResetProps = {
    handleReset: () => void;
    isResetDisabled: boolean;
}

export default function ButtonReset({handleReset, isResetDisabled} : ButtonResetProps) {
    return (
        <button
        onClick={handleReset}
        className="bg-strong-cyan text-center text-very-dark-cyan font-bold rounded-lg h-12 w-full mt-8 disabled:cursor-not-allowed disabled:bg-[#0D686D] xl:mt-[192px]"
        disabled={isResetDisabled}
    >
        Reset
    </button>
    )
}
