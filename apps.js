let flashcards = [];
let currentQuestion = 0;
let correctAnswers = 0;

function addFlashcard() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    if (question.trim() !== '' && answer.trim() !== '') {
        flashcards.push({ question, answer });
        displayFlashcards();
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
    }
}

function displayFlashcards() {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = '';
    flashcards.forEach((flashcard, index) => {
        const card = document.createElement('div');
        card.classList.add('flashcard');
        card.innerHTML = `
            <div class="question">${index + 1}. ${flashcard.question}</div>
            <div class="answer">Answer: ${flashcard.answer}</div>
        `;
        flashcardsContainer.appendChild(card);
    });
}

function startQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const quizQuestion = document.getElementById('quiz-question');
    quizQuestion.textContent = flashcards[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('quiz-answer').value;
    const correctAnswer = flashcards[currentQuestion].answer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < flashcards.length) {
        showQuestion();
    } else {
        showScore();
    }
    document.getElementById('quiz-answer').value = '';
}

function showScore() {
    const totalQuestions = flashcards.length;
    const score = (correctAnswers / totalQuestions) * 100;
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.style.display = 'block';
    scoreContainer.querySelector('#score').textContent = `You scored ${score}% (${correctAnswers}/${totalQuestions})`;
}
