// Object de-strucure and JSON API

const course={
    coursename:"js-hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor)  // not problem but ....

const {courseInstructor:instruc}=course
console.log(instruc)

//json: javascript object notation
// data from api come in the form of object, array of object or object of array