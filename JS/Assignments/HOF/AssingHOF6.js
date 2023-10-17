const Pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function validLinkedIn(input) {
    return Pattern.test(input)
}

const url="https://www.linkedin.com/in/johndoe/"


if (validLinkedIn(url)) {
    console.log(`"${url}" is a valid URL.`);
} else {
    console.log(`"${url}" is not a valid URL.`);
}
