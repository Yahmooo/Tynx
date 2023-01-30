import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import tools, { loader } from 'terminaltools';
import { sleep } from './src/utils/sleep.js'
import { teaserText, teaserText1, teaserText2, teaserText3, headline, headline1, headline2, headline3,
    teaserImageFound, teaserImageFound2, teaserImageFound3 } from './src/api/api.js';


//Welcome screen
async function welcome() {
    //T-Online logo made with figlet and animated with chalkAnimation
    figlet.text('T-Online', {
        font: 'larry3d',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        chalkAnimation.karaoke(data, 3);
    });
    //timeout for loading animation
    await sleep();
    //Info
    console.log(`
        ${chalk.bgMagenta.underline('T-Online News Checker')} 
            Im on your Computer.
            With me you can check the T-Online News.
    `);
}
async function selectArticle() {
    inquirer
        .prompt([
            {  type: 'list', message: 'Select an Article\n', name: 'choices',
        choices: [
        `${headline}`,
        `${headline1}`,
        `${headline2}`,
        `${headline3}`,
        ]}
    ])
    .then(async answers => {
        answers.choices
        const spinner = createSpinner('Checking selection...').start();
        await sleep();
        if (answers.choices === `${headline}`) {
            await article1();
            spinner.success()
            } else if (answers.choices === `${headline1}`) {
                await article2();
                spinner.success()
            } else if (answers.choices === `${headline2}`) {
                await article3();
            spinner.success()
            } else if (answers.choices === `${headline3}`) {
                await article4();
                spinner.success()
            }else{
                spinner.error({ text: `error`})
            }
    })
    }

    async function article1() {
        inquirer
            .prompt([
                {  type: 'list', message: 'What do you want to see?\n', name: 'choices',
            choices: [
            'whole article',
            'headline',
            'teaserText',
            'image',
            ]}
        ])
        .then(async answers => {
            answers.choices
            const spinner = createSpinner('Checking...').start();
            await sleep();
            if (answers.choices === 'teaserText') {
                spinner.success({ text: `${teaserText}.` });
                } else if (answers.choices === 'headline') {
                spinner.success({ text: `${headline}.` });
                } else if (answers.choices === 'whole article') {
                    spinner.success({ text: `${headline} \n ${teaserText}.` });
                } else if (answers.choices) {
                    var image = await tools.image(teaserImageFound)
                    spinner.success(console.log(image))
                }else{
                    spinner.error({ text: `error`})
                }
        })
    }

    async function article2() {
        inquirer
            .prompt([
                {  type: 'list', message: 'What do you want to see?\n', name: 'choices',
            choices: [
            'whole article',
            'headline',
            'teaserText',
            'image',
            ]}
        ])
        .then(async answers => {
            answers.choices
            const spinner = createSpinner('Checking...').start();
            await sleep();
            if (answers.choices === 'teaserText') {
                spinner.success({ text: `${teaserText1}.` });
                } else if (answers.choices === 'headline') {
                spinner.success({ text: `${headline1}.` });
                } else if (answers.choices === 'whole article') {
                    spinner.success({ text: `${headline1} \n ${teaserText1}.` });
                } else if (answers.choices == 'image') {
                    var image1 = await tools.image(teaserImageFound1)
                    spinner.success(console.log(image1))
                }else{
                    spinner.error({ text: `error`})
                }
        })
    }

    async function article3() {
        inquirer
            .prompt([
                {  type: 'list', message: 'What do you want to see?\n', name: 'choices',
            choices: [
            'whole article',
            'headline',
            'teaserText',
            'image',
            ]}
        ])
        .then(async answers => {
            answers.choices
            const spinner = createSpinner('Checking...').start();
            await sleep();
            if (answers.choices === 'teaserText') {
                spinner.success({ text: `${teaserText2}.` });
                } else if (answers.choices === 'headline') {
                spinner.success({ text: `${headline2}.` });
                } else if (answers.choices === 'whole article') {
                    spinner.success({ text: `${headline2} \n ${teaserText2}.` });
                } else if (answers.choices == 'image') {
                    var image2 = await tools.image(teaserImageFound2)
                    spinner.success(console.log(image2))
                }else{
                    spinner.error({ text: `error`})
                }
        })
    }

    async function article4() {
        inquirer
            .prompt([
                {  type: 'list', message: 'What do you want to see?\n', name: 'choices',
            choices: [
            'whole article',
            'headline',
            'teaserText',
            'image',
            ]}
        ])
        .then(async answers => {
            answers.choices
            const spinner = createSpinner('Checking...').start();
            await sleep();
            if (answers.choices === 'teaserText') {
                spinner.success({ text: `${teaserText3}.` });
                } else if (answers.choices === 'headline') {
                spinner.success({ text: `${headline3}.` });
                } else if (answers.choices === 'whole article') {
                    spinner.success({ text: `${headline3} \n ${teaserText3}.` });
                } else if (answers.choices == 'image') {
                    var image2 = await tools.image(teaserImageFound3)
                    spinner.success(console.log(image2))
                }else{
                    spinner.error({ text: `error`})
                }
        })
    }

console.clear();
await welcome();
await selectArticle();
