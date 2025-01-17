function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Check if the alphanumeric string is equal to its reverse
  return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test the function with the input "eye"
console.log(palindrome("eye")); // Output: true