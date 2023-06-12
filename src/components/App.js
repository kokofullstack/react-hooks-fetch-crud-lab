import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

function App() {
  const [page, setPage] = useState('List');
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((resp) => resp.json())
      .then((questions) => setQuestionList(questions));
  }, []);

  function handleAddQuestion(newQuestion) {
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    })
      .then((resp) => resp.json())
      .then((question) => {
        setQuestionList((prevQuestionList) => [...prevQuestionList, question]);
        setPage('List');
      });
  }

  function handleDeleteClick(id) {
    setQuestionList((prevQuestionList) =>
      prevQuestionList.filter((question) => question.id !== id)
    );
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuestionList((prevQuestionList) =>
      prevQuestionList.map((question) => {
        if (question.id === updatedQuestion.id) {
          return updatedQuestion;
        } else {
          return question;
        }
      })
    );
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === 'Form' ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          onUpdateQuestion={handleUpdateQuestion}
          onDeleteClick={handleDeleteClick}
          questionList={questionList}
        />
      )}
    </main>
  );
}

export default App;
// export default App;

// import React, { useState } from 'react';
// import AdminNavBar from './AdminNavBar';
// import QuestionForm from './QuestionForm';
// import QuestionList from './QuestionList';

// function App() {
//   const [page, setPage] = useState('List');

//   return (
//     <main>
//       <AdminNavBar onChangePage={setPage} />
//       {page === 'Form' ? <QuestionForm /> : <QuestionList />}
//     </main>
//   );
// }

// export default App;
