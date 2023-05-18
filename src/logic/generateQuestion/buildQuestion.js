import { skill } from './data';

//---> function that builds the question based on the operator and skill stage
const buildQuestion = (operator, currentSkill) => {
    const maxSkill = Math.ceil(currentSkill);
    const questionCode = skill[operator].stage[maxSkill];

    console.log(`--- Building Question ---
    Question Code: ${questionCode}
    Operator: ${operator}`);

    const q1 = Math.floor(Math.random() * 10 ** questionCode[0]);
    const q2 = Math.floor(Math.random() * 10 ** questionCode[2]);
    let a = 0;

    switch (operator) {
        case 'add':
            a = q1 + q2;
            break;
        case 'subtract':
            a = q1 - q2;
            break;
        case 'multiply':
            a = q1 * q2;
            break;
        case 'divide':
            a = Math.round(q1 / q2);
            break;
        default:
            console.log(`Sorry, wrong operator ${operator}.`);
    }

    if (a <= 0 || q1 === 0 || q2 === 0) {
        console.log(`x-> Rejected : ${q1} ${operator} ${q2} = ${a}`);
        return buildQuestion(operator, currentSkill);
    }

    console.log(`
    Question: ${q1} ${operator} ${q2} = 
    Answer: ${a}`);

    return { q1, q2, a };
};

export default buildQuestion;
