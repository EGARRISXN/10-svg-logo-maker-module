// Defining the SVG class with text and color functions
class SVG {
    constructor() {
      this.textE = '';
      this.shapeE = '';
    }
  
    render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeE}${this.textE}</svg>`;
    }
  
    setText(text, textColor) {
      this.textE = `<text x='150' y='130' text-anchor='middle' font-size='40' fill='${textColor}'>${text}</text>`;
    }
  
    setShape(shape) {
      this.shapeE = shape.render();
    }
  }

  //Exports the SVG class
  module.exports = SVG;