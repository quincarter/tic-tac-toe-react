export type GameValue = "X" | "O" | null;

type Props = {
  value: GameValue;
  onSquareClick: () => void;
};

export const Square = ({ value, onSquareClick }: Props) => (
  <>
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  </>
);

export default Square;
