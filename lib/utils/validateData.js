export default function validateRegisterData(formData) {
    if (formData.email.trim() === '' || (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
        throw new Error("Invalid email");
    }

    if (formData.password.trim() === '' || formData.password.trim().length < 4) {
        throw new Error("Password not valid");
    }

    if (formData.password.trim() !== formData.repeatPassword.trim()) {
        throw new Error("Passwords do not match");
    }

    return true;
}