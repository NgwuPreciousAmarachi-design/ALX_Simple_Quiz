function checkAnswer() {
  // 1. Identify the correct answer
  const correctAnswer = "4";

  // 2. Retrieve the user's answer (the checked radio button)
  const selected = document.querySelector('input[name="quiz"]:checked');

  // Handle no selection gracefully
  if (!selected) {
    document.getElementById('feedback').textContent = 'Please select an answer.';
    return;
  }

  const userAnswer = selected.value;

  // 3. Compare and show feedback
  const feedbackEl = document.getElementById('feedback');

  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = "Correct! Well done.";
  } else {
    feedbackEl.textContent = "That's incorrect. Try again!";
  }
}

// 4. Add event listener to the Submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);