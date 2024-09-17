import React from 'react';
import '../../styles/CreateQuiz.css';

const CreateQuiz = ({categoryInput,questionInput,answerInput, onChangeInput1,
  onChangeInput2,
  onChangeInput3}) => {

  return (
    <div className="create-quiz">
      <div className="create-quiz-text">
        <label htmlFor="">
          Категория
          <input type="text" value={categoryInput} onChange={onChangeInput1} required/>
        </label>
        <label htmlFor="">
            Вопрос
          <input type="text" value={questionInput} onChange={onChangeInput2} required/>
        </label>
        <label htmlFor="">
            Ответ
        <textarea name="" id="" value={answerInput} onChange={onChangeInput3} required/>
        </label>
      </div>
    </div>
  );
};

export default CreateQuiz;
