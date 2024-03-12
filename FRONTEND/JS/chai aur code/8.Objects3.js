// Object de-strucure and JSON API

const course={
    coursename:"js-hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor)  // not problem by but ....

const {courseInstructor:instructor}=course
console.log(instructor)

//json: javascript object notation
// data from api come in the form of object, array of object or object of array