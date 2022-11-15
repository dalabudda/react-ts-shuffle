import './Letters.scss';
import LetterObject from '../classes/LetterObject';
import Letter from '../Letter/Letter';

interface LettersProps {
  letters: Array <LetterObject>;
}

function Letters({ letters }: LettersProps) {
  return (
    <div className="Letters">
    {
      letters.map((letterObject: LetterObject) =>
        <Letter key={letterObject.id} letter={letterObject.letter}  r={letterObject.color.r} g={letterObject.color.g} b={letterObject.color.b} />
      )
    }
    </div>
  );
}

export default Letters;
