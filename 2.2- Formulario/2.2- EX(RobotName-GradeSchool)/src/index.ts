import { Robot } from './robotName';

const robot1 = new Robot();
console.log(`Robot 1 Name: ${robot1.name}`);

const robot2 = new Robot();
console.log(`Robot 2 Name: ${robot2.name}`);

robot1.resetName();
console.log(`Robot 1 New Name: ${robot1.name}`);

Robot.releaseNames();
const robot3 = new Robot();
console.log(`Robot 3 Name after release: ${robot3.name}`);



import { GradeSchool } from './gradeSchool';

const school = new GradeSchool();

school.add("Alice", 3);
school.add("Bob", 4);
school.add("Charlie", 3);

console.log(school.grade(3)); // ["Alice", "Charlie"]
console.log(school.roster());
