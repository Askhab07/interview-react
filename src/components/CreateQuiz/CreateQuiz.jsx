import React from 'react';
import '../../styles/CreateQuiz.css';

const CreateQuiz = ({categoryInput,questionInput,answerInput, onChangeInput1,
  onChangeInput2,
  onChangeInput3}) => {

  return (
    <div className="create-quiz">
      <div className="create-quiz-text">
        <select name="" id="" value={categoryInput} onChange={onChangeInput1} required>
          <option value='' selected disabled>Категория</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>TypeScript</option>
        </select>
        <label htmlFor="">
            Вопрос
          <input type="text" value={questionInput} onChange={onChangeInput2} required/>
        </label>
        <label htmlFor="">
            Ответ
        <textarea value={answerInput} onChange={onChangeInput3} required/>
        </label>
      </div>
    </div>
  );
};

export default CreateQuiz;
