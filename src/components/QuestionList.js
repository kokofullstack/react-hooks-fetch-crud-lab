import React from 'react';
import QuestionItem from './QuestionItem';

function QuestionList({ questionList, onDeleteClick, onUpdateQuestion }) {
  const displayedList = questionList.map((question) => {
    return (
      <QuestionItem
        onUpdateQuestion={onUpdateQuestion}
        onDeleteClick={onDeleteClick}
        question={question}
        key={question.id}
      />
    );
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayedList}</ul>
    </section>
  );
}

export default QuestionList;

// import React from "react";

// function QuestionList() {
//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>{/* display QuestionItem components here after fetching */}</ul>
//     </section>
//   );
// }

// export default QuestionList;
