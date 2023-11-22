const inquirer = require('inquirer')
const fs = require('fs')


const questions = () => {
    return inquirer.prompt([
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

const writeTofile = responses => {
    fs.writeFile()
}
}







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