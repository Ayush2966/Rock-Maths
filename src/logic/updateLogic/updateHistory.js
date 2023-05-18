export default function updateHistory(quiz) {
    let newQuiz = quiz;

    const lastStep = quiz.history.length;

    //Add the current history to the new array
    newQuiz.history = [
        ...quiz.history,
        {
            stepNumber: lastStep + 1,
            question: quiz.question,
            answerCorrect: quiz.answerCorrect
        }
    ];
    return { ...newQuiz };
}
