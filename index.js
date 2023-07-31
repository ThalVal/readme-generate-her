// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generatePage = require('./readme-generate-her/utils/generateMarkdown.js');

// array of questions for user
const questions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'github',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'title',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name for your project!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        message: 'What kind of license will your project use?',
        name: 'license',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'install',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the steps required to install your project!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter how this application is to be used!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: 'What command is needed to run tests?',
        name: 'tests', 
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'Are there any contributions user should know about?',
        name: 'contributors',
    }
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if error occurs
        if (err) {
            console.log(err);
            return;
        // README has been succesfully created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function call to start program
questions()
// getting user inputs
.then(answers => {
    return generatePage(answers);
})
// uses data to display on page 
.then(data => {
    return writeFile(data);
})
// catch errors 
.catch(err => {
    console.log(err)
})
