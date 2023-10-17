// Object de-strucure and JSON API

const course={
    coursename:"js-hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor)  // not problem by but ....

const {courseInstructor:instructor}=course
console.log(instructor)