export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function upperCase(string) {
    const firstLetter = string[0].toUpperCase();
    const restOfString = string.slice(1);

    return firstLetter + restOfString;
}
