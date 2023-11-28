const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes');


function writeFile(fileName, responses) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${responses.Shape}`;

    let shape;
    if (responses.Shape === "Triangle") {
        shape = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${responses.ShapeColor}"/>`
        
    } else if (responses.Shape === "Circle") {
        shape = new Circle()
        svgString += `<circle cx="150" cy="100" r="80" fill="${responses.ShapeColor}"/>`
        
    } else if (responses.Shape === "Square") {
        shape = new Square()
        svgString += `<rect x="70" y="40" width="160" height="160" fill="${responses.ShapeColor}"/>`
        
    }

    svgString += `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${responses.TextColor}">${responses.Text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("You generated a logo.svg");
    });

}
function questions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What text do you want for your logo to display? (Enter up to three characters)",
            name: "Text",
        },
        {
            type: "input",
            message: "What text color do you want to display? (Enter a color keyword or a hexadecimal number)",
            name: "TextColor",
        },
        {
            type: "list",
            message: "What shape do you want your logo to display?",
            choices: ["Triangle", "Circle", "Square"],
            name: "Shape",
        },
        {
            type: "input",
            message: "What shape color you want your background to display? (Enter a color keyword or a hexadecimal number)",
            name: "ShapeColor"
        }

    ])
    .then((responses) => {
        if (responses.Text.length > 3) {
            console.log("Maximum of 3 characters only");
            questions();
        } else {
            writeFile("logo.svg", responses);
        }
    });
}

questions();


/*User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

Acceptance Criteria
-GIVEN a command-line application that accepts user input
-WHEN I am prompted for text
-THEN I can enter up to three characters
-WHEN I am prompted for the text color
-THEN I can enter a color keyword (OR a hexadecimal number)
-WHEN I am prompted for a shape
-THEN I am presented with a list of shapes to choose from: circle, triangle, and square
-WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/