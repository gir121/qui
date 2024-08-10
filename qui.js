const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What color is the sky?",
        options: ["Green", "Blue", "Red", "Yellow"],
        answer: "Blue"
    }
];

function loadQuiz() {
    const quizForm = document.getElementById('quizForm');
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionText);
        
        item.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${option}"> ${option}
            `;
            questionDiv.appendChild(label);
        });
        
        quizForm.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const formData = new FormData(document.getElementById('quizForm'));
    let score = 0;
    
    quizData.forEach((item, index) => {
        const selectedAnswer = formData.get(`q${index}`);
        if (selectedAnswer === item.answer) {
            score++;
        }
    });
    
    const totalQuestions = quizData.length;
    const resultText = `You scored ${score} out of ${totalQuestions} questions correctly.`;
    document.getElementById('result').textContent = resultText;
}

document.getElementById('submitBtn').addEventListener('click', submitQuiz);

window.onload = loadQuiz;
