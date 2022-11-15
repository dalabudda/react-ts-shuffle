import React, { FormEvent, MouseEvent } from 'react';
import './Actions.scss';

interface ActionsProps {
  setLettersFromString: (lettersString: string) => void;
  shuffle: () => void;
  sort: () => void;
}

function Actions({ setLettersFromString, shuffle, sort }: ActionsProps) {
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => { setLettersFromString(e.currentTarget.value.toUpperCase()); };
  const handleOnClickSuffle = (e: MouseEvent<HTMLDivElement>) => { shuffle(); };
  const handleOnClickSort = (e: MouseEvent<HTMLDivElement>) => { sort(); };

  return (
    <div className="Actions">
      <input type="text" placeholder="type..." maxLength={12} onChange={handleOnChange}></input>
      <div className="buttons">
        <div className="action-button" onClick={handleOnClickSuffle}>Shuffle</div>
        <div className="action-button" onClick={handleOnClickSort}>Sort</div>
      </div>
    </div>
  );
}

export default Actions;
