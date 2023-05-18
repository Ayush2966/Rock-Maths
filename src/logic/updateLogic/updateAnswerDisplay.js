export default function updateAnswerDisplay(quiz, keyPress) {
    let newQuiz = quiz;

    //Ready is the text on display when the app is first loaded
    // !!! Need to change this to something better
    if (newQuiz.answerDisplay === 'Ready?') {
        newQuiz.answerDisplay = [];
    }

    switch (keyPress) {
        case '.': {
            //1. The answer doesn't contain another .
            if (!quiz.answerDisplay.find((item) => item === '.')) {
                //2. Add . to the display
                newQuiz.answerDisplay = [...newQuiz.answerDisplay, keyPress];
            }
            //3. Else just return it back
            break;
        }
        case 'del': {
            //Clears the entire display
            newQuiz.answerDisplay = [];
            break;
        }
        case 'Backspace': {
            //Clears only previous number
            newQuiz.answerDisplay.pop();
            break;
        }
        default: {
            //Everything else is added to the end of answerDisplay
            newQuiz.answerDisplay = [...newQuiz.answerDisplay, keyPress];
        }
    }
    //Send back the updated newQuiz
    return {
        ...newQuiz
    };
}
