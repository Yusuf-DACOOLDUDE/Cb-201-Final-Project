let questionNumber = 0
let score = 0

const quiz = [
    {
      "question": "What is the capital of Nebraska?",
      "answer": ["Albany","Lincoln","Cheyenne","Providence"],
      "correctAnswer": "Lincoln"
    },
    {
      "question": "Where was the Declaration of Independence Signed?",
      "answer": ["Pennyslvania", "Boston", "Jamestown", "Harrisburg"],
      "correctAnswer": "Pennyslvania"
    },
    {
      "question": "What state is Juneau in?",
      "answer": ["Nebraska", "Washington", "Montana", "Alaska"],
      "correctAnswer": "Alaska"
    },
]

function showquestion() {
    const questionDiv = document.getElementById("question")
    questionDiv.innerHTML = ""

    // Stop when quiz is finished (game over screen)
    if (questionNumber >= quiz.length) {
        // in question div, show message "Quiz is over!"
        questionDiv.textContent = "All done"
        document.getElementById("answer").innerHTML = ""
        document.getElementById("result").textContent = "Your final score: " + score
        return
    }

    questionDiv.textContent = quiz[questionNumber].question

    const answerDiv = document.getElementById("answer")
    answerDiv.innerHTML = ""

    quiz[questionNumber].answer.forEach(function(answer){
        answerDiv.innerHTML += `
            <button onclick="checkanswer('${answer}')">
                ${answer}
            </button>
        `
    })

}

function checkanswer(answer) {
    const resultDiv =document.getElementById("result")
    if (answer === quiz[questionNumber].correctAnswer) {
        resultDiv.textContent = "Correct!"
        score++
    } else {
        resultDiv.textContent = "Wrong!"
    }

    questionNumber++

    showquestion()
}

showquestion()