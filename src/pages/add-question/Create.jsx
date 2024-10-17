import React, { useState } from 'react';
import CreateQuiz from '@/components/createQuiz/CreateQuiz';
import Button from '@/components/button/Button';
import './create.css';
import arrow from '@/assets/arrowwhite.svg';
// import axios from 'axios';

const Create = ({ setPages }) => {
  const [newCategory, setNewCategory] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setPages(1);
  };

  // const addQuiz = () => {

  //   if (!newCategory || !newQuestion || !newAnswer) {
  //     alert('All fields are required');
  //     return;
  //   }

  //   setIsLoading(true);

  //   axios.post('https://script.google.com/macros/s/AKfycbzQIkZAfd4jsH3Hehp5cK3YmAcGmPL7LAfRq753RO2zrXKSnTVuqpvgTRGG2wOhHJjc/exec', {
  //     id: new Date().getTime(),
  //     category: newCategory,
  //     question: newQuestion,
  //     answer: newAnswer
  // }, {
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  //     })
  //     .then(response => {
  //       console.log("Responce:", response.data);
  //       setPages(4);
  //     })
  //     .catch(error => {
  //       console.error('Error adding question:', error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });;
  // };

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
        {/* <Button onClick={addQuiz} className="add" text="Create" /> */}
      </div>
      {/* {isLoading && <div className='loading'>Loading...</div>} */}
    </div>
  );
};

export default Create;
