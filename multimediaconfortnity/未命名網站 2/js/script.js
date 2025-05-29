// Wait for the entire HTML page to load
document.addEventListener('DOMContentLoaded', function() {

    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('quizResults');

    if (quizForm) {
        
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Define the correct answers (value of the radio button)
            const correctAnswersValues = {
                q1: 'a', // rén
                q2: 'c', // Thank you
                q3: 'b', // 五
                q4: 'b'  // Hello
            };

            let score = 0;
            const totalQuestions = Object.keys(correctAnswersValues).length;

            // Reset previous feedback
            document.querySelectorAll('.feedback').forEach(span => span.textContent = '');
            document.querySelectorAll('.correct-answer').forEach(span => span.textContent = '');
            document.querySelectorAll('.feedback').forEach(span => span.className = 'feedback'); // Reset class

            // Check each question
            for (const questionName in correctAnswersValues) {
                const userAnswerInput = document.querySelector(`input[name="${questionName}"]:checked`);
                const feedbackSpan = document.getElementById(`feedback-${questionName}`);
                const correctAnswerSpan = document.getElementById(`correct-${questionName}`);

                if (userAnswerInput) {
                    const selectedValue = userAnswerInput.value;
                    const isCorrect = (selectedValue === correctAnswersValues[questionName]);

                    if (isCorrect) {
                        score++;
                        feedbackSpan.textContent = ' - Correct!'; // English text
                        feedbackSpan.className = 'feedback correct'; // Add 'correct' class
                    } else {
                        feedbackSpan.textContent = ' - Incorrect!'; // English text
                        feedbackSpan.className = 'feedback incorrect'; // Add 'incorrect' class
                        
                        // Find the text of the correct answer from the data-answer-text attribute
                        const correctAnswerRadio = document.querySelector(`input[name="${questionName}"][value="${correctAnswersValues[questionName]}"]`);
                        if (correctAnswerRadio) {
                            const correctAnswerText = correctAnswerRadio.dataset.answerText || correctAnswerRadio.nextSibling.textContent.trim(); // Get correct answer text
                            correctAnswerSpan.textContent = `Correct answer: ${correctAnswerText}`; // English text
                        }
                    }
                } else {
                    // Should not happen if 'required' works
                    feedbackSpan.textContent = ' - Not answered!'; // English text
                    feedbackSpan.className = 'feedback incorrect';
                }
            }

            // Display the overall score
            resultsDiv.innerHTML = `<h2>Your Score: ${score} out of ${totalQuestions}</h2>`; // English text
            
            if (score === totalQuestions) {
                resultsDiv.style.color = 'green';
                resultsDiv.innerHTML += "<p>Excellent! Perfect score! 太棒了!</p>"; // English text (Chinese part kept)
            } else if (score >= totalQuestions / 2) {
                resultsDiv.style.color = 'orange';
                 resultsDiv.innerHTML += "<p>Good job! Keep practicing! 不錯，繼續加油!</p>"; // English text (Chinese part kept)
            } else {
                resultsDiv.style.color = 'red';
                 resultsDiv.innerHTML += "<p>Don't give up! Review the materials and try again! 別放棄，複習一下再試一次!</p>"; // English text (Chinese part kept)
            }
        });
    }
});
