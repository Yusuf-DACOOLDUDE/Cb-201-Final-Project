const questionNumber = 0

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
]

function showquestion() {
    const questionDiv = document.getElementById("question")
    questionDiv.textContent = quiz[questionNumber].question

    const answerDiv = document.getElementById("answer")
    answerDiv.innerHTML = ""

    quiz[questionNumber].answer.forEach(function(answer){
        answerDiv.innerHTML += `
            <button>
                ${answer}
            </button>
        `
    })

}

function checkquestion() {
    // const answerDiv = 
    /*
     1. Click Button
     2. Trigger code to check button avec un function
     3. Get text from button
     4.Check if button text is the same as correct answer.

    */
}

showquestion()