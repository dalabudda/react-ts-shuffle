import { useState } from 'react';
import './App.scss';
import Color from '../classes/Color';
import LetterObject from '../classes/LetterObject';
import Actions from '../Actions/Actions';
import Letters from '../Letters/Letters';

function App() {
  const [lettersString, setLettersString] = useState<string>('');
  const [letters, setLetters] = useState<Array<LetterObject>>([]);

  const setLettersFromString = (newLettersString: string) => {
    let i: number = 0;
    while (i < lettersString.length) {
      if (i < newLettersString.length) {
        if (lettersString.charAt(i) !== newLettersString.charAt(i)) {
          break;
        }
      } else {
        break;
      }
      i++;
    }
    
    let newLetters: Array <LetterObject> = letters.filter(letter => letter.id < i);
    for (let j: number = i; j < newLettersString.length; j++) {
      newLetters.push(new LetterObject(j, newLettersString.charAt(j), Color.random()));
    }

    setLettersString(newLettersString);
    setLetters(newLetters);
  };

  const shuffle = () => {
    setLetters(letters.sort(() => Math.random() - 0.5).map(letter => letter));
  };

  const sort = () => {
    setLetters(letters.sort((a: LetterObject, b: LetterObject) => a.id - b.id).map(letter => letter));
  };

  return (
    <div className="App">
      <div className="App-content">
        <header>
          <p>
            Shuffle challenge
          </p>
        </header>
        <Actions setLettersFromString={setLettersFromString} shuffle={shuffle} sort={sort} />
        <Letters letters={letters} />
      </div>
    </div>
  );
}

export default App;
