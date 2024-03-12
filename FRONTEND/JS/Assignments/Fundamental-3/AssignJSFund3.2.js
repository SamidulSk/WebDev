// creat a object of student and update the student mark

let student={
    name:"samidul",
    age:20,
    grade:"A"
}
function updateGrade(newGrade){
    student.grade=newGrade;
}

updateGrade("B")
console.log(student)

//output:: { name: 'samidul', age: 20, grade: 'B' }