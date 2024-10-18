import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ArchiveBoxIcon } from '@heroicons/react/16/solid';
import usePersistedState from '../hooks/usePersistedState';

const Questions = () => {
  const { category } = useParams(); // Получаем категорию из URL
  const { categories } = useContext(AppContext);

  // Фильтруем вопросы по категории
  const filteredQuestions = categories.filter((q) => q.category === category);

  // Состояние для хранения перечеркнутых вопросов
  const [crossedQuestions, setCrossedQuestions] = usePersistedState('crossedQuestions', []);

  const handleClick = (id) => {
    setCrossedQuestions((prev) => 
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    );
  };

  // Разделяем вопросы на перечеркнутые и неперечеркнутые
  const uncrossedQuestions = filteredQuestions.filter(q => !crossedQuestions.includes(q.id));
  const crossedQuestionsList = filteredQuestions.filter(q => crossedQuestions.includes(q.id));
  console.log(uncrossedQuestions);
  

  return (
    <div className="w-full p-5 mb-20">
      <h1 className="text-xl font-bold mb-3">
        Вопросы из категории: {category}
      </h1>
      <span className='text-gray-400'>Количество вопросов для изучение: {uncrossedQuestions.length}</span>
      <div className="flex flex-col gap-4 mt-5">
        {/* Отображаем неперечеркнутые вопросы */}
        {uncrossedQuestions.length > 0 ? (
          uncrossedQuestions.map((question) => (
            <div key={question.id} className="flex justify-between items-center px-7 h-16 bg-violet-100 rounded-full">
              <Link to={`/interview-react/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-violet-500">
                {`${question.question.slice(0, 40)}...`}
              </Link>
              <ArchiveBoxIcon 
                className="size-5 text-violet-500 cursor-pointer" 
                onClick={() => handleClick(question.id)} 
              />
            </div>
          ))
        ) : (
          <p>Нет вопросов в этой категории.</p>
        )}

        {/* Отображаем перечеркнутые вопросы */}
        {crossedQuestionsList.length > 0 && (
          <div className="flex flex-col gap-4 mt-5">
            <h2 className="text-lg font-bold">Изученные вопросы:</h2>
            <span className='text-gray-400'>Количество вопросов которые ты знаешь {crossedQuestionsList.length}</span>
            {crossedQuestionsList.map((question) => (
              <div key={question.id} className="flex justify-between items-center px-7 h-16 bg-violet-100 rounded-full opacity-50 line-through">
                <Link to={`/interview-react/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-violet-500">
                  {`${question.question.slice(0, 40)}...`}
                </Link>
                <ArchiveBoxIcon 
                  className="size-5 text-violet-500 cursor-pointer" 
                  onClick={() => handleClick(question.id)} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;