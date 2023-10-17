const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Probir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    }
];

function checkResult(studentName) {
    let found = false;
    for (let student of students) {
        if (student.name === studentName && student.marks >= 90) {
            console.log("Congratulations! " + student.name + " You have cleared the exam");
            found = true;
            break; // No need to continue searching if we found a match.
        }
    }

    if (!found) {
        console.log("Sorry, " + studentName + " you have not cleared the exam");
    }
}

checkResult("Shivam");

// output:: Sorry, Shivam you have not cleared the exam