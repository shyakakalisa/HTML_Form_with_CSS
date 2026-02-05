const form = document.getElementById('studentForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const major = document.getElementById('major').value;

    resultDiv.textContent = `Submitted: ${name}, ${email}, Age: ${age}, Major: ${major}`;
});
