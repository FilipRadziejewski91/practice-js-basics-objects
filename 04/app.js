const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '05',
        month: '04',
        year: '1985'
    }
}

const now = new Date();
// console.log(now);
const nowDay = now.getDate();
// console.log(nowDay);
const nowMonth = now.getMonth();
// console.log(nowMonth);

const birthDay = parseInt(user.born.day);
// console.log(birthDay);
const birthMonth = parseInt(user.born.month);
// console.log(birthMonth);

const checkBirthday = function () {
    if (birthDay === nowDay && birthMonth === nowMonth) {
        console.log(user.firstName + " " + user.lastName + " obchodzi dziś urodziny!")
    } else {
        console.log(user.firstName + " " + user.lastName + " nie ma dziś urodzin :/")
    }
}

checkBirthday();