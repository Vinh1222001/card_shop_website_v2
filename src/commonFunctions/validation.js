export function isPasswordValid(password) {

    const hasLowerCase = /[a-z]/.test(password);
    
    const hasUpperCase = /[A-Z]/.test(password);

    const hasDigits = /\d/.test(password);

    const hasSpecialChars = /[^a-zA-Z0-9]/.test(password); 
    
    return (password.length >= 8) && hasLowerCase && hasUpperCase && hasDigits && !hasSpecialChars;
}


export function isRetypePasswordValid(retypePassword, password) {
    return retypePassword === password;
}

