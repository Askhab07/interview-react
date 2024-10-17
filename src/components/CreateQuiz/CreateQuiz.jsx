import React from 'react';
import './createQuiz.css';

const CreateQuiz = ({
  category,
  question,
  answer,
  setNewCategory,
  setNewQuestion,
  setNewAnswer,
}) => {
  return (
    <div className="create-quiz">
      <div className="create-quiz-text">
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setNewCategory(e.target.value)}
          required
        >
          <option value='' selected disabled>
            Категория
          </option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>TypeScript</option>
        </select>
        <label htmlFor="">
          Вопрос
          <input
            type="text"
            value={question}
            onChange={(e) => setNewQuestion(e.target.value)}
            required
          />
        </label>
        <label htmlFor="">
          Ответ
          <textarea value={answer} onChange={(e) => setNewAnswer(e.target.value)} required />
        </label>
      </div>
    </div>
  );
};

export default CreateQuiz;
