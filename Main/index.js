   const inquirer = require('inquirer');

   class CLI {
    run() {
        return inquirer
        .prompt([
            /*
            Prompt the use for the specs they want to display in the SVG
            */
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            /*
            Create some conditional logic to generate a new instance of the shape class and pass in user input
            */

            /*
            Create a new instance of the SVG class and set the text and shape
            */

            /*
            Return the writeFile method, passing in the file name and the rendered svg
            */
        })
        .then(() => {
            /*
            Log a message to the console that the file has been generated
            */
        })
        .catch(() => {
            /*
            console.log(error) for debugging purposes
            */
        });
    }
   }