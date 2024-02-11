var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return `Name is ${userName} , age is ${userAge} and the user has hobbies: ${userHasHobby}`;
}

console.log(summarizeUser(name, age, hasHobbies));

function summarize(username, ...abc){
  return `summarize ${username}  ${abc.join(', ')}`;
}

console.log(summarize('punit', 'a','b','c','1','2','3'));
