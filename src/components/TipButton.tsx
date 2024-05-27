interface TipButtonProps {
    percentage: number;
    selected: boolean;
    onClick: () => void;
}

const TipButton: React.FC<TipButtonProps> = ({ percentage, selected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded font-bold text-2xl transition ease-in-out ${selected ? 'bg-strong-cyan text-very-dark-cyan' : 'bg-very-dark-cyan text-white'}`}
        >
            {percentage}%
        </button>
    );
};

export default TipButton;
