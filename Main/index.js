const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('../Main/lib/shape.js');
const SVG = require('../Main/lib/svg.js');

// Defining a SVG class with constructors
class CLI {
  run() {
    return inquirer.prompt([
    // Text Prompt
    {
      type: 'input',
      message: 'Choose your text. (Max three characters)',
      name: 'text',
    },
    // Text color prompt
    {
      type: 'input',
      message: 'Choose text color. (Enter color keyword or hexadecimal number)',
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
      message: 'Choose shape color (Enter color keyword or hexadecimal number)',
      name: 'shapeColor',
    },
  ])
    //console.log to avoid typing too many letters for the SVG
    .then((prompts) => {
      if (prompts.text.length > 3) {
        console.log('Cannot exceed three letters.');
        promptUser();
      } else {
        //Setting the the texts and shapes for the SVG
        let svg = new SVG();
        svg.setText(prompts.text, prompts.textColor);

        let shape;
        if (prompts.shape === 'Circle') {
          shape = new Circle();
          svg.setShape(shape);
          svg.shapeE += `<circle cx='150' cy='115' r='80' fill='${prompts.shapeColor}'/>`;
        } else if (prompts.shape === 'Triangle') {
          shape = new Triangle();
          svg.setShape(shape);
          svg.shapeE += `<polygon points='150, 18 244, 182 56, 182' fill='${prompts.shapeColor}'/>`;
        } else {
          shape = new Square();
          svg.setShape(shape);
          svg.shapeE += `<rect x='90' y='40' width='160' height='160' fill='${prompts.shapeColor}'/>`;
        }
        //Renders the SVG
        writeToFile('logo.svg', svg.render());
      }
    })
    .catch((error => {
      console.log(error);
    }))
}}
//Runs the CLI
const cli = new CLI;
cli.run();






// Writing data to the file
function writeToFile(fileName, svg) {
  fs.writeFile(fileName, svg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('logo.svg has been generated!');
    }
  });
}