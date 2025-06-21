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
    const allowedFeatures = ["wireless", "noice cancellation", "voice assistant", "water resistant"];
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

    if (!productData.category) {
        throw new Error("Category is required");
    }

    if (!allowedCategories.includes(productData.category)) {
        throw new Error("Invalid category");
    }

    if (!productData.feature) {
        throw new Error("Feature is required");
    }

    if (!allowedFeatures.includes(productData.feature)) {
        throw new Error("Invalid feature");
    }

    if (!productData.color) {
        throw new Error("Color is required");
    }

    if (!allowedColors.includes(productData.color)) {
        throw new Error("Invalid color");
    }

    if (!productData.quantity) {
        throw new Error("Quantity is required");
    }

    if (isNaN(productData.quantity) || productData.quantity <= 0) {
        throw new Error("Quantity must be a positive number bigger than 0");
    }

    if (isNaN(productData.price) || productData.price <= 0) {
        throw new Error("Price must be a positive number bigger than 0");
    }

    if (productData.discount) {
        if (isNaN(productData.discount) || productData.discount <= 0) {
            throw new Error("Discount must be a positive number between 10 than 90");
        }
    }

    if (!productData.image || productData.image === "") {
        throw new Error("Image URL is required");
    }

    const regExp = new RegExp(/^http?s:\/\//);
    const isImageUrlValid = regExp.test(productData.image);

    if (!isImageUrlValid) {
        throw new Error("Invalid image URL");
    }

    return productData;
}

const validateData = {
    onRegister,
    onLogin,
    onAdd,
    onProductAdd
}

export default validateData;