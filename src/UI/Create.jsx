import React, { useState } from 'react';
import CreateQuiz from '../components/CreateQuiz/CreateQuiz';
import Button from '../components/Button/Button';
import '../styles/Create.css';
import arrow from '../assets/arrowwhite.svg';
import { quiz } from '../db/database';

const Create = ({ setPages }) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');

  const handleClick = () => {
    setPages(1);
  };

  const onChangeInput1 = (e) => {
    e.preventDefault();
    setCategoryInput(e.target.value);
  };

  const onChangeInput2 = (e) => {
    e.preventDefault();
    setQuestionInput(e.target.value);
  };

  const onChangeInput3 = (e) => {
    e.preventDefault();
    setAnswerInput(e.target.value);
  };

  const addQuiz = () => {
    quiz.push({
      id: quiz.length + 1,
      category: categoryInput,
      question: questionInput,
      answer: answerInput,
    });
    console.log(quiz);
  };

  return (
    <div className="create">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <CreateQuiz
        categoryInput={categoryInput}
        questionInput={questionInput}
        answerInput={answerInput}
        onChangeInput1={onChangeInput1}
        onChangeInput2={onChangeInput2}
        onChangeInput3={onChangeInput3}
      />
      <div className="create-footer">
        <Button className="add-arrow" icon={arrow} onClick={handleClick} />
        <Button onClick={addQuiz} className="add" text="Create" />
      </div>
    </div>
  );
};

export default Create;
