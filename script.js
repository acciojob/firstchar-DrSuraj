function firstChar(text) {
    // Trim leading and trailing spaces
    const trimmedText = text.trim();

    // Check if the trimmed text is not empty
    if (trimmedText !== '') {
        // Return the first character of the trimmed text
        return trimmedText.charAt(0);
    } else {
        // Return an empty string if the text is empty or only contains spaces
        return '';
    }
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
