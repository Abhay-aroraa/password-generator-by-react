document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const rating = document.querySelector('input[name="rating"]').value;
    const feedbackServices = document.querySelector('textarea[name="feedbackServices"]').value;
    const feedbackCategory = document.querySelector('select[name="feedbackCategory"]').value;

    const displayFeedback = document.getElementById("displayFeedback");
    displayFeedback.innerHTML = `
    <h3>Feedback Summary:</h3>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Rating:</strong> ${rating}/10</p>
    <p><strong>Feedback on Services:</strong> ${feedbackServices}</p>
    <p><strong>Feedback Category:</strong> ${feedbackCategory}</p>
`;
});