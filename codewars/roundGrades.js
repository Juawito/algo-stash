
function gradingStudents(grades) {
    let results = [];
    let amountOfGrades = 0;
    if(grades[0] <= 60 && grades[0] === grades.length - 1) {
        amountOfGrades = grades[0];
        grades.shift();
    } else {
        amountOfGrades = grades.length;
    }
    for (let i = 0; i < amountOfGrades; i++){
        let currentGrade = grades[i];
        let multipleOfFive = Math.floor(currentGrade / 5);
         if (((multipleOfFive + 1) * 5) - currentGrade < 3 && currentGrade >= 38) {
            results.push((multipleOfFive +1 )* 5);
        } else {
            results.push(currentGrade);
        }
    }
    console.log(results)
    return results

}

let gradeArr = [25,
    36,
    6,
    98,
    25,
    97,
    24,
    25,
    70,
    50,
    71,
    30,
    14,
    28,
    100,
    3,
    26,
    61,
    98,
    50,
    41,
    5,
    3,
    28,
    34,
    0];

gradingStudents(gradeArr);
