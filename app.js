import  Question  from "./Question.js";
import Quiz from "./Quiz.js";

const App = (()=>{
    //questions

    //DOM (cache)
    const questionEL = document.querySelector('.quiz__question');
    const trackerEL = document.querySelector('.quiz__tracker');
    const progressInnerEL = document.querySelector(".progress__inner");
    const taglineEL = document.querySelector(".tagline");
    const choicesEL = document.querySelector(".quiz__choices");
    const nextEL = document.querySelector(".next");
    const restartEL = document.querySelector(".restart");

    //render the DOM

    //name: renderAll

    //listers

    return{
        renderAll: renderAll,
        listener: listener
    }

})();