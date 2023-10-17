// check if a string has only unique characters or not
function uniqueCharacterCheck(name) {
    const charSet = new Set();

    for (const char of name) {
        if (charSet.has(char)) {
            console.log("This input string contains duplicates");
            return;
        }
        charSet.add(char);
    }

    console.log("This input string contains unique characters");
}

uniqueCharacterCheck("mithun");
uniqueCharacterCheck("anurag");
