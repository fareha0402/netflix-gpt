export const validateForm = (email,password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!isEmailValid) return 'Email is Invalid'
    if(!isPasswordValid) return 'Password is Invalid'
    return null
}

