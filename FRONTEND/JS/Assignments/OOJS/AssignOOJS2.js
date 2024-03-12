class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courses = []; // Initialize an empty array to store enrolled courses
    }
    
    courseEnroll(course) {
        this.courses.push(course); 
        console.log(`${this.name} enrolled in course ${course}`);
    }
    
    displayCourses() {
        console.log(`${this.name} enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admission extends Student {
    constructor(name, email) {
        super(name, email);
    }
    
    enrollStudent(student) {
        console.log(`${student.name} has been enrolled`);
    }
}

const student1 = new Student('Samidul', 'mrsamidul@gmail.com');
const student2 = new Student('susovan', 'mrsusovan@gmail.com');

const newAdmission = new Admission('Jahed', 'jahed@example.com');
student1.courseEnroll('Data Science');
student1.displayCourses();
newAdmission.enrollStudent(student1);
newAdmission.enrollStudent(student2)
