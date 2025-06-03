function onRegister(formData) {
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

function onAdd(formData) {
    const allowedRoles = ["user", "admin", "moderator"];

    if (formData.email.trim() === '' || (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
        throw new Error("Invalid email");
    }

    if (formData.password.trim() === '' || formData.password.trim().length < 4) {
        throw new Error("Password not valid or less than 4 characters");
    }

    if (!allowedRoles.includes(formData.role)) {
        throw new Error("Invalid role");
    }

    return true;
}

const validateData = {
    onRegister,
    onAdd
}

export default validateData;