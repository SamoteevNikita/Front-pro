class Student { 
  constructor(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;

    this.attendance = new Array(25).fill(undefined);
    this.attendanceIndex = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.log(`${this.firstName} ${this.lastName} уже имеет 25 посещений`);
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.log(`${this.firstName} ${this.lastName} уже имеет 25 посещений`);
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceCount = this.attendance.filter(att => att === true).length;
    const averageAttendance = attendanceCount / 25;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "красава";
    } else if (averageGrade <= 90 && averageAttendance <= 0.9) {
      return "ну такое...";
    } else {
      return "хорошо, но можно лучше";
    }
  }
}

const student1 = new Student('Ваня', 'Петрушка', 2000, [95, 92, 87, 88]);
const student2 = new Student('Машка', 'Кудряшка', 1999, [85, 80, 90, 88]);
const student3 = new Student('Сашка', 'Макашка', 2001, [100, 100, 100, 100]);


student1.present();
student1.present();
student1.absent();
student1.present();


console.log(student1.summary()); 
console.log(student2.summary()); 
console.log(student3.summary()); 
