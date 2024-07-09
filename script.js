// Get the password input element
var passwordInput = document.getElementById('password');
// Get the strength display element
var strengthDisplay = document.getElementById('strength');
// Add an event listener for input changes on the password field
passwordInput.addEventListener('input', function () {
    // Get the current value of the password input
    var password = passwordInput.value;
    // Determine the strength of the password
    var strength = checkPasswordStrength(password);
    // Display the password strength
    strengthDisplay.textContent = "Strength: ".concat(strength);
});
// Function to check the strength of a password
function checkPasswordStrength(password) {
    // Define regular expressions for different character types
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var lengthValid = password.length >= 8;
    // Determine the strength based on the character types
    var strength = 'Weak';
    if (lengthValid && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength = 'Very Strong';
    }
    else if (lengthValid && hasUpperCase && hasLowerCase && (hasNumbers || hasSpecialChars)) {
        strength = 'Strong';
    }
    else if (lengthValid && (hasUpperCase || hasLowerCase) && (hasNumbers || hasSpecialChars)) {
        strength = 'Moderate';
    }
    // Return the determined strength
    return strength;
}
