//SVG class and the function to create the text
class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
}

function writeToFile(fileName, answers) {

//Sets the width and height of the container
let svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

// <g> wraps the text so it appears on top
svg += '<g>';

// Takes user input for shape choice and inserts it into SVG file
svg += `${answers.shape}`;

// Text edits
svg += `<text x='150' y='130' text-anchor='middle' font-size='40' fill='${answers.textColor}'>'${answers.text}'</text>`;

// Closing </g> tag
svg += '</g>';

// Closing </svg> tag
svg += '</svg>';

fs.writeFile(fileName, svg, (err) => {
    err ? console.log(err) : console.log('Generated logo.svg');
})

}

module.exports = SVG;