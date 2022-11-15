class Color {
  r: number = 0;
  g: number = 0;
  b: number = 0;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static randomNumber(): number {
    return Math.round(Math.random() * 255);
  }

  static random(): Color {
    let r: number = this.randomNumber();
    let g: number = this.randomNumber();
    let b: number = this.randomNumber();

    if (r + g + b > 690) { // fix for letter visibility
      r -= 25;
      g -= 25;
      b -= 25;
    }

    return new Color(r, g, b);
  }
}

export default Color;
