const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('../Main/lib/shape.js');

function writeToFile(fileName, answers) {
    
    let svg = '';

    //Sets the width and height of the container
    svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    
    // Opening tag that sets text on top
    svg += '<g>';
    
    // Takes user input for shape choice and inserts it into SVG file
    svg += `${answers.shape}`;

    let shape;
    if (answers.shape === 'Circle') {
        shape = new Circle();
        svg += `<circle cx='150' cy='115' r='80' fill='${answers.shapeColor}'/>`;
    } else if (answers.shape === 'Square') {
        shape = new Triangle();
        svg += `<polygon points='150, 18 244, 182 56, 182' fill='${answers.shapeColor}'/>`;
    } else {
        shape = new Square();
        svg += `<rect x='90' y='40' width='160' height='160' fill='${answers.shapeColor}'/>`;
    }
    
    // Text edits
    svg += `<text x='150' y='130' text-anchor='middle' font-size='40' fill='${answers.textColor}'>'${answers.text}'</text>`;
    
    // Closing tag
    svg += '</g>';
    
    // Closing tag
    svg += '</svg>';
    
    fs.writeFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    });
}

function promptUser() {
    inquirer
        .prompt([
        //Text Prompt
        {
        type: 'input',
        message:
            'Choose your text. (Max three characters)',
        name: 'text',
        },
        // Text color prompt
        {
        type: 'input',
        message:
            'Choose text color. (Enter color keyword or hexadecimal number)',
        name: 'textColor',
        },
        // Shape prompt
        {
        type: 'list',
        message: 'Chose your shape.',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
        },
        // Shape color prompt
        {
        type: 'input',
        message:
            'Choose shape color (Enter color keyword or hexadecimal number)',
        name: 'shapeColor',
        },
    ])
    .then(({ text, textColor, shape, shapeColor }) => {
        if (text.length > 3) {
            console.log('Must not exceed three letters.');
            promptUser();
        } else {
            writeToFile('logo.svg', answers);
        }
    });
}
promptUser();