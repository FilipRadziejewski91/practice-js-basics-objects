const user = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    sex: 'male',
    age: 30,
}

for (const key in user) {
    console.log(user[key]);
}