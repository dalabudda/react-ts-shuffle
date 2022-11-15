import Color from './Color';

class LetterObject {
  id: number = -1;
  letter: string = '';
  color: Color = new Color(0, 0, 0);

  constructor(id: number, letter: string, color: Color) {
    this.id = id;
    this.letter = letter;
    this.color = color;
  }
}

export default LetterObject;
