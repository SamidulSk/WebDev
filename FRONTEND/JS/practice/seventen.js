// Function to generate a random password based on a given length and criteria
function generatePassword() {
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    let digits = "0123456789";
    let allChars = capitalLetters + lowercaseLetters + specialChars + digits;

    let passwordLength = 12; // Define the length of the password
    let password = "";

    // Ensure the first 4 characters match your original pattern
    password += getRandomChar(capitalLetters);  // Capital letter
    password += getRandomChar(lowercaseLetters); // Lowercase letter
    password += getRandomChar(specialChars);     // Special character
    password += getRandomChar(digits);           // Digit

    // Generate remaining random characters
    for (let i = 4; i < passwordLength; i++) {
        password += getRandomChar(allChars);
    }

    return password;
}

// Helper function to get a random character from a string
function getRandomChar(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

// Function to copy the password to the clipboard
function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Event listeners for button clicks
document.getElementById("generateBtn").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const newPassword = generatePassword();
    passwordField.value = newPassword; // Display the generated password in the input field
});

document.getElementById("copyBtn").addEventListener("click", function () {
    copyToClipboard(); // Copy the generated password to the clipboard
});
