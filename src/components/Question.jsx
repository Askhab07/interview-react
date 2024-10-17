import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Question = () => {
  const { id } = useParams();
  const {categories} = useContext(AppContext);
  const navigate = useNavigate();

  const filteredQuestion = categories.find((q) => q.id === parseInt(id));

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className="flex flex-col justify-between p-5 h-screen">
      {filteredQuestion ? (
        <div className='flex-grow'>
          <div className="w-full h-32 flex flex-col border-b-2 border-violet-300 mb-8">
            <h3 className='text-2xl font-semibold mb-3'>{filteredQuestion.category}</h3>
            <h4 className='text-l font-medium'>{filteredQuestion.question}</h4>
          </div>
          <div className="min-h-full h-5/6 mb-5">{filteredQuestion.answer}</div>
        </div>
      ) : (
        <p>Вопрос не найден.</p>
      )}
      <div className='flex justify-between mb-20'>
      <button className='w-40 h-24 font-semibold text-xl rounded-2xl text-violet-500 bg-violet-100' onClick={handleClick}>Назад</button>
      <button className='w-40 h-24 font-semibold text-xl rounded-2xl text-violet-500 bg-violet-100'>Посмотреть<br/>код</button>
      </div>
    </div>
  );
};

export default Question;
