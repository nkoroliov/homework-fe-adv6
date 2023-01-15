const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// 1. Повертає список предметів для конкретного студента.

function getSubjects(students) {
    let arrSubjects = Object.keys(students.subjects).map(subject =>
        (subject.charAt(0).toUpperCase() + subject.slice(1)).split('_').join(' '));
    return arrSubjects
}
console.log('1. getSubjects - ', getSubjects(students[0]));

// 2. Повертає середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.

function getAverageMark(students) {
    let arrSubjects = Object.values(students.subjects).flat();
    let sumGrade = arrSubjects.reduce((previousValue, currentValue) => previousValue + currentValue);
    return (sumGrade / arrSubjects.length).toFixed(2)
}
console.log('2. getAverageMark - ', getAverageMark(students[0]));

// 3. Повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(students) {
    return {"course": students.course, "name": students.name, "averageMark": getAverageMark(students)};
}
console.log('3. getStudentInfo - ', getStudentInfo(students[0]));

// 4. Повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    let studentsName = students.map(student => student.name);
    return studentsName.sort();
}
console.log('4. getStudentsNames - ', getStudentsNames(students));

// 5. Повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    let bestGrade = 0;
    let bestStudent;
    students.forEach(element => {
        let averageMark = getAverageMark(element);
        if (averageMark > bestGrade) {
            bestGrade = averageMark;
            bestStudent = element.name;
        }
    })
    return bestStudent
}
console.log('5. getBestStudent - ', getBestStudent(students));

// 6. повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word) {
    let objCalc = {};
    word = word.toLowerCase().split('');
    for (i = 0; i < word.length; i++) {
        if (objCalc[word[i]] > 0) {
            objCalc[word[i]] += 1
        } else {
            objCalc[word[i]] = 1
        }
    }
    return objCalc;

}
console.log('6. calculateWordLetters - ', calculateWordLetters("тест"));