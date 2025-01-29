import { useState } from "react";  
import quizData from "./quizData";  
const Quiz = () => {  
 const [currentQuestion, setCurrentQuestion] = useState(0);   const [score, setScore] = useState(0);  
 const [showScore, setShowScore] = useState(false);  
 const handleAnswerClick = (selectedOption) => {  
 if (selectedOption === quizData[currentQuestion].answer) {   setScore(score + 1);  
 }  
 const nextQuestion = currentQuestion + 1;  
 if (nextQuestion < quizData.length) {  
 setCurrentQuestion(nextQuestion);  
 } else {  
 setShowScore(true);  
 }  
 };  
 return (  
 <div className="quiz-container"> 
 {showScore ? (  
 <div className="score-section"> 
 Your Score: {score} / {quizData.length} 
 </div> 
 ) : (  
 <div className="question-section"> 
 <h2>{quizData[currentQuestion].question}</h2> 
 <div className="options"> 
 {quizData[currentQuestion].options.map((option, index) => (   <button key={index} onClick={() => handleAnswerClick(option)}>  {option} 
 </button> 
 ))} 
 </div> 
 </div> 
 )} 
 </div> 
 );  
};  
export default Quiz; 