// Get the password input element
const passwordInput = document.getElementById('password') as HTMLInputElement;

// Get the strength display element
const strengthDisplay = document.getElementById('strength') as HTMLElement;

// Add an event listener for input changes on the password field
passwordInput.addEventListener('input', () => {
    // Get the current value of the password input
    const password = passwordInput.value;

    // Determine the strength of the password
    const strength = checkPasswordStrength(password);

    // Display the password strength
    strengthDisplay.textContent = `Strength: ${strength}`;
});

// Function to check the strength of a password
function checkPasswordStrength(password: string): string {
    // Define regular expressions for different character types
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const lengthValid = password.length >= 8;

    // Determine the strength based on the character types
    let strength = 'Weak';
    if (lengthValid && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength = 'Very Strong';
    } else if (lengthValid && hasUpperCase && hasLowerCase && (hasNumbers || hasSpecialChars)) {
        strength = 'Strong';
    } else if (lengthValid && (hasUpperCase || hasLowerCase) && (hasNumbers || hasSpecialChars)) {
        strength = 'Moderate';
    }

    // Return the determined strength
    return strength;
}