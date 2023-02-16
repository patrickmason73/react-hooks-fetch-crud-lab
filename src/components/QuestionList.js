import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, handleDelete, handleChange}) {
  
  console.log(questions)
  const questionDisplay = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} handleDelete={handleDelete} handleChange={handleChange}/>
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionDisplay}</ul>
    </section>
  );
}

export default QuestionList;
