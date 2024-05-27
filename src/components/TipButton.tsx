interface TipButtonProps {
    percentage: number;
    selected: boolean;
    onClick: () => void;
}

const TipButton: React.FC<TipButtonProps> = ({ percentage, selected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
            {percentage}%
        </button>
    );
};

export default TipButton;
