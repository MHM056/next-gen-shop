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

function onLogin(formData) {
    if (formData.email.trim() === '' || (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
        throw new Error("Invalid email");
    }

    if (formData.password.trim() === '' || formData.password.trim().length < 4) {
        throw new Error("Password not valid");
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

function onProductAdd(formData) {
    const allowedCategories = ["headphones", "earbuds", "speakers", "microphones", "accessories"];
    const allowedFeatuers = ["wireless", "noice cancellation", "voice assistant", "water resistant"];
    const allowedColors = ["white", "black", "blue", "red"];

    const productData = {
        title: formData.title.trim(),
        brand: formData.brand.trim(),
        description: formData.description.trim(),
        category: formData.category,
        feature: formData.feature,
        color: formData.color,
        image: formData.image.trim(),
        quantity: formData.quantity.toNumber(),
        price: formData.price.toNumber(),
        discount: formData.discount.toNumber(),
        isFeatured: formData.isFeatured,
        label: formData.label
    }

    if (productData.title === '') {
        throw new Error("Title is required");
    }

    if (productData.title.length < 3 || productData.title.length > 30) {
        throw new Error("Title length must be between 3 and 30 characters");
    }

    if (productData.brand === '') {
        throw new Error("Brand is required");
    }

    if (productData.brand.length < 2 || productData.brand.length > 10) {
        throw new Error("Brand length must be between 2 and 10 characters");
    }

    if (productData.description === '') {
        throw new Error("Description is required");
    }

    if (productData.description.length < 10 || productData.description.length > 200) {
        throw new Error("Description length must be between 10 and 200 characters");
    }


}

const validateData = {
    onRegister,
    onLogin,
    onAdd,
    onProductAdd
}

export default validateData;