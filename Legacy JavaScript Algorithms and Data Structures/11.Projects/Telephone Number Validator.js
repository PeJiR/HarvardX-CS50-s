function telephoneCheck(str) {
  // Regular expression to match valid US phone number formats
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  return regex.test(str);
}

// Test the function with the input "555-555-5555"
console.log(telephoneCheck("555-555-5555")); // Output: true