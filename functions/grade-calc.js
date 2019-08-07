// function using parameters students score and total possible score
// output as follows: 'You got a C  (75%)!
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59

const gradeCalc = function(studentScore, totalScore) {
    const percent = studentScore / totalScore;
    const percentConvert = percent * 100;
    let letterGrade = '';

    if (percent >= .9) {
        letterGrade = 'A'
    } else if (percent >= .8) {
        letterGrade = 'B'
    }else if (percent >= .7) {
        letterGrade = 'C'
    }else if (percent >= .6) {
        letterGrade = 'D'
    }else if (percent >= 0) {
        letterGrade = 'F'
    }else {
        return (`Enter a valid great`)
    };

    return (`You got an ${letterGrade} (${percentConvert}%)!`)

};

const result = gradeCalc(10, 100);
console.log(result);
