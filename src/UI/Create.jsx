import React, { useState } from 'react';
import CreateQuiz from '../components/CreateQuiz/CreateQuiz';
import Button from '../components/Button/Button';
import '../styles/Create.css';
import arrow from '../assets/arrowwhite.svg';
import axios from 'axios';

const Create = ({ setPages }) => {
  const [newCategory, setNewCategory] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleClick = () => {
    setPages(1);
  };

  const addQuiz = () => {

    if (!newCategory || !newQuestion || !newAnswer) {
      alert('All fields are required');
      return;
    }

    axios.post('http://localhost:3001/api/quiz', {
        category: newCategory,
        question: newQuestion,
        answer: newAnswer
      })
      .then(response => {
        console.log(response.data.message);
        setPages(4);
      })
      .catch(error => {
        console.error('Error adding question:', error);
      });
  };

  return (
    <div className="create">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <CreateQuiz
        category={newCategory}
        question={newQuestion}
        answer={newAnswer}
        setNewCategory={setNewCategory}
        setNewQuestion={setNewQuestion}
        setNewAnswer={setNewAnswer}
      />
      <div className="create-footer">
        <Button className="add-arrow" icon={arrow} onClick={handleClick} />
        <Button onClick={addQuiz} className="add" text="Create" />
      </div>
    </div>
  );
};

export default Create;
