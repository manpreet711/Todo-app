const student = {
    name:'john',
    age:23,
    isActive: false
}
//convert this object into a string to be stored in local storage

const studentobjtostring = JSON.stringify(student)
console.log(typeof studentobjtostring);

// save to local storage

//localStorage.setItem('student',studentobjtostring);
 
//convert back into json

const tojsonstudent = JSON.parse(studentobjtostring);
console.log(typeof tojsonstudent);

console.log(tojsonstudent.age);
