import buildQuestion from './buildQuestion';
import { level, skill } from './data';

export const generateQuestion = (quiz) => {
    //
    //      just needs one new question based on the current level and skill
    //      desired output -> updates 3 values in quiz { question, answerCorrect, skill }

    // Initialise a new Quiz
    const newQuiz = { ...quiz };
    // Get the values of current skill and level
    const currentLevel = Math.ceil(newQuiz.level);
    //const currentSkill = Math.ceil(newQuiz.skill);

    console.log(currentLevel);

    // Utility Function: Generates a random integer between any 2 numbers
    const getRandomIntBetween = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };

    // Generates a random operator that doens't have level 0
    const generateOperator = () => {
        const allOperatorsArray = ['add', 'subtract', 'multiply', 'divide'];
        const newOperator = allOperatorsArray[getRandomIntBetween(0, 3)];

        if (level[currentLevel][newOperator].min === 0) {
            return generateOperator();
        }

        return newOperator;
    };

    // Random operator that's newly generated is stored in operator
    const operator = generateOperator();

    // Get the min and max stage in the current level
    const minStage = level[currentLevel][operator].min;
    const maxStage = level[currentLevel][operator].max;
    // Pick a random stage between the min and max Stage (inclusive)
    const generatedStage = getRandomIntBetween(minStage, maxStage);
    const newSkill = skill[operator].stage[generatedStage];

    //this need to be dynamic
    const difficultyLevel = (Math.random() * (currentLevel * generatedStage)) / 10;
    //const difficultyLevel = Math.round(Math.random() * 10) / (40 * generatedStage * currentLevel);

    console.log(`-- Generate Question --

    Question Code: ${newSkill}
    Current Level: ${currentLevel}
    Operator: ${operator}
    Current Skill (+): ${quiz.skill['add']}
    Current Skill (-): ${quiz.skill['subtract']}
    Current Skill (x): ${quiz.skill['multiply']}
    Current Skill (/): ${quiz.skill['divide']}
    Generated Stage: ${generatedStage}
    Difficulty Level: ${difficultyLevel}
    Min: ${minStage}
    Max: ${maxStage}
    `);

    const { q1, q2, a } = buildQuestion(operator, generatedStage);
    const symbol = {
        add: '+',
        subtract: '-',
        multiply: 'x',
        divide: '÷'
    };

    // Assign all the values generated to newQuiz
    newQuiz.question = [q1, symbol[operator], q2];
    newQuiz.answerCorrect = `${a}`;
    newQuiz.skill[operator] =
        Number(newQuiz.skill[operator]) + Number(difficultyLevel) > maxStage
            ? maxStage
            : Number(newQuiz.skill[operator]) + Number(difficultyLevel);
    //console.log('New Quiz: ', newQuiz);

    //   updgrade skill Status
    //   loop over each operator and check if they have reached max
    //-> when all the skills have reached max upgrade the skill

    // set the skill Status to true if completed
    for (let operator in newQuiz.skill) {
        if (newQuiz.skill.hasOwnProperty(operator)) {
            // console.log(operator);
            // console.log(newQuiz.skill[operator]);
            //check if the stage is complete
            if (newQuiz.skill[operator] >= level[currentLevel][operator].max) {
                // make the status true
                newQuiz.skillStatus[operator] = true;
            }
        }
    }

    let upgrade = true;

    // check if all the 4 skills are done
    for (let operator in newQuiz.skill) {
        if (newQuiz.skill.hasOwnProperty(operator)) {
            //the skill is not completed
            if (newQuiz.skillStatus[operator] === false) {
                upgrade = false;
            }
        }
    }

    if (upgrade) {
        //if its reached max length of the level -> dont upgrade
        if (newQuiz.level === Object.keys(level).length) {
            upgrade = false;
        }
        // otherwise upgrade the level
        newQuiz.level++;
        // set theSkillstatus to false
        newQuiz.skillStatus = {
            add: false,
            subtract: false,
            multiply: false,
            divide: false
        };
        // set the upgrade back to false
        upgrade = false;
    }

    // skill status
    console.log(` -- Skill Status
    Upgrade : ${upgrade}
    Add: ${newQuiz.skillStatus.add} 
    Subtract: ${newQuiz.skillStatus.subtract} 
    Multiply: ${newQuiz.skillStatus.multiply} 
    Divide: ${newQuiz.skillStatus.divide} 
    `);

    return { ...newQuiz };
};
