import  Question  from "./Question.js";
import Quiz from "./Quiz.js";

const App = (()=>{
    //questions
    const q1 = new Question(
        "Which of the following is used to define a variable in JavaScript?",
        ["var", "let", "Both A and B", "None of the above"], 2
    );
    const q2 = new Question(
        "Which of the following methods is used to access HTML elements using JavaScript?",
        ["getElementById", "getElementByClassName", "Both A and B", "None of the above"], 2
    );
    const q3 = new Question(
        "Upon encountering empty statements, what does the Javascript Interpreter do?",
        ["Throws an erro", "Ignores the statements", "Gives a warning", "None of the above"], 1
    );
    const q4 = new Question(
        "Which of the following methods can be used to display data in some form using JavaScript?",
        ["document.write()", "console.log()", "window.alert()", "All of the above"], 3
    );
    const q5 = new Question(
        "How can a datatype be declared to be a constant type?",
        ["const", "var", "let", "constant"], 0
    );

    //create the quiz
    const quiz = new Quiz([q1,q2,q3,q4,q5]);
    
   
    //DOM (cache)
    const questionEL = document.querySelector('.quiz__question');
    const trackerEL = document.querySelector('.quiz__tracker');
    const progressInnerEL = document.querySelector(".progress__inner");
    const taglineEL = document.querySelector(".tagline");
    const choicesEL = document.querySelector(".quiz__choices");
    const nextEL = document.querySelector(".next");
    const restartEL = document.querySelector(".restart");

    //function to write to html element
    const setValue = (element, text) => {
        element.innerHTML = text;
    }

    //function to calculate the percentage
    const percentage = (score) => (score/quiz.questions.length) * 100;

    //render the question
    const renderQuestion = _ => {
        //get question
        const question =  quiz.getCurrentQuestion().question;
        //set question 
        setValue(questionEL, question);
    }
    
    //render the tracker
    const renderTracker = _ => {
        let tracker = `${quiz.currentIndex += 1} of 5`;
        setValue(trackerEL, tracker);
    }

    //update progress
    const updateProgress = _ => {
        progressInnerEL.style.width = `${percentage(quiz.score)}%`;
    }

    //render tagline
    const renderTagline = (value) => {
        setValue(taglineEL, value);
    }

    //render choices
    const renderChoices = _ => {
        let markup = "";
        const choices = quiz.getCurrentQuestion().choices;

        choices.forEach((choice, index) => {
            markup += `
            <li class="quiz__choice">
                <input type="radio" name="choice" class="input-choice" id="choice${index}">
                <label for="choice${index}" class="quiz__label">
                    <i></i>
                    ${choice}
                </label>
            </li>
            `;
        });

        setValue(choicesEL, markup);
    }

    //render all the DOM
    const renderAll = _ => {
        //check if the quiz has ended
        if(quiz.hasEnded()){

        } else{
            //display question
            renderQuestion();
            //change tracker
            renderTracker();
            //progress bar
            updateProgress();
            //set tagline
            renderTagline("Select one of the choices");
            //render choices
            renderChoices();
        }
    }

    //listeners
    const listener = _ => {
        //next listener
        nextEL.addEventListener('click', _ => {
            const inputEL = document.querySelectorAll(".input-choice");
            inputEL.forEach((item,index) => {
                if(!item.checked){
                    if(index === inputEL.length){
                        window.alert("Select one of the choices");
                    }
                } else{
                    //check the guess
                    quiz.guess(index);
                    //renderAll
                    renderAll();
                }
            });
        });

        //restart
        restartEL.addEventListener('click', _ => {
            quiz.currentIndex = 0;
            score = 0;
        });
    }

    return{
        renderAll: renderAll,
        listener: listener,
    }

})();

App.renderAll();
App.listener();