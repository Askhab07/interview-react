import React from 'react';
import '../../styles/CreateQuiz.css';

const CreateQuiz = () => {
  return (
    <div className="create-quiz">
      <div className="create-quiz-text">
        <label htmlFor="">
          Категория
          <input type="text" />
        </label>
        <label htmlFor="">
            Вопрос
          <input type="text" />
        </label>
        <label htmlFor="">
            Ответ
        <textarea name="" id="">
        </textarea>
        </label>
      </div>
    </div>
  );
};

export default CreateQuiz;
