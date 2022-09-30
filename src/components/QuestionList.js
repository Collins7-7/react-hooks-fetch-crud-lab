import React, {useState, useEffect} from "react";
import QuestionForm from "./QuestionForm";

function QuestionList() {

const [question, setQuestion] = useState([]);


useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then ((resp) => resp.json())
  .then ((data) => setQuestion(data))
},[])

function handleAddQuestion(theQuestion){
const newQuestionArray = [...question, theQuestion];
setQuestion(newQuestionArray);
};
console.log(question)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <> <QuestionForm handleQuestion={handleAddQuestion}/></>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
