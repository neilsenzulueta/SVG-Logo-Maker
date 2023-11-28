// Packages required for this application.
const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to write SVG content to a file.
function writeFile(fileName, responses) {
    let svgString = "";
    // Start of SVG string.
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${responses.Shape}`;

    let shape;
    // Conditional Statements to determine user shape choice.
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
    // Continued SVG string containing text element and user choice text and color.
    svgString += `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${responses.TextColor}">${responses.Text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    // Write created SVG string to a file.
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("You generated a logo.svg");
    });

}
// Function for user input.
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
