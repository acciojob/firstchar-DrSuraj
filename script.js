function firstChar(str: string): string {
    // Trim the input string to remove leading and trailing spaces
    const trimmedStr = str.trim();

    // Check if the trimmed string is not empty
    if (trimmedStr.length > 0) {
        // Return the first character of the trimmed string
        return trimmedStr.charAt(0);
    } else {
        // Return an empty string if the input string is empty or contains only spaces
        return '';
    }
}

// Examples
console.log(firstChar(' Rosa Parks '));  // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' '));              // Output: ''
console.log(firstChar(''));               // Output: ''
