function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    let decodedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    return decodedChar;
  });
}

// Test the function with the input "SERR PBQR PNZC"
console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP