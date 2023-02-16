import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import QuestionItem from "./QuestionItem";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestion] = useState([])

useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then(res => res.json())
  .then(data => setQuestion(data))
}, [questions])

// function questionFilter(item) {
//   const newQuestionList = questions.filter((question) => question.id !== item.id)
//   setQuestion(newQuestionList)
//  }

// function updateItem(item){
//   const updatedItems = questions.map((question) => {
//     if (question.id === item.id) {
//       return item;
//     } else {
//       return question
//     }
//   })
//   setQuestion(updatedItems)
// }

function handleChange(id, answer) {
  fetch(`http://localhost:4000/questions/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify({
      "correctIndex": answer
    })
  }) 
  // .then(res => res.json())
  // .then(data => updateItem(data))
}


function handleDelete(id) {
  fetch(`http://localhost:4000/questions/${id}`, {
    method: 'DELETE' }) 
  .then(res => res.json())
  .then((data) => {
    const newQ = questions.filter(question => question.id !== id)
    setQuestion(newQ)
    }
  )
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestion={setQuestion}/> : <QuestionList questionItem={QuestionItem} questions={questions} setQuestion={setQuestion} handleDelete={handleDelete} handleChange={handleChange}/>}
    </main>
  );
}

export default App;
