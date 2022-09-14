import  Question  from "./Question.js";
import Quiz from "./Quiz.js";

const q1 = new Question("what is 2 + 2 ?", [2, 0, 4, 6], 2);

const q2 = new Question(
"who is the prime minister of Canada ?",
 ['Justin Trudue', 'Obama', 'Joe biden', 'Charles'], 
 0
);

const quiz1 = new Quiz([q1,q2]);
console.log(quiz1.getCurrentQuestion());