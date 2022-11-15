import './Letter.scss';

interface LetterProps {
  letter: string;
  r: number;
  g: number;
  b: number;
}

function Letter({ letter, r, g, b }: LetterProps) {
  const color: string = "rgb(" + r + ", " + g + ", " + b + ")";

  return (
    <div className="Letter" style={{backgroundColor: color}}>
      <p>{ letter }</p>
    </div>
  );
}

export default Letter;
