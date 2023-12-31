class MarkDown{
    static generateReadme(answers){
        return `
## ${answers.title}

## Table of contents
- [Project description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

## Questions
${answers.email}
${answers.github}

## License
Licensing used: ${answers.license}
`}
}

module.exports = MarkDown;
