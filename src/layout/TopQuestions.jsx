import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ArchiveBoxIcon } from '@heroicons/react/16/solid';
import usePersistedState from '../hooks/usePersistedState';

const TopQuestions = () => {
  const { data } = useContext(AppContext);

  const topQuestions = data.quiz.filter(question => question.top === true);
  
  const [crossedQuestions, setCrossedQuestions] = usePersistedState('crossedQuestions', []);

  const handleClick = (id) => {
    setCrossedQuestions((prev) => 
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    );
  };

  const uncrossedQuestions = topQuestions.filter(q => !crossedQuestions.includes(q.id));
  const crossedQuestionsList = topQuestions.filter(q => crossedQuestions.includes(q.id));

  return (
    <div className="w-full min-h-screen p-5 mb-20 dark:bg-slate-800">
      <h1 className="text-xl font-bold mb-3 dark:text-white">
        Топ вопросы
      </h1>
      <span className='text-gray-400'>Количество вопросов для изучение: {uncrossedQuestions.length}</span>
      <div className="flex flex-col gap-4 mt-5">
        {/* Отображаем неперечеркнутые вопросы */}
        {uncrossedQuestions.length > 0 ? (
          uncrossedQuestions.map((question, index) => (
            <div key={question.id} className="flex justify-between items-center px-5 h-16 dark:bg-slate-500 bg-violet-100 rounded-full">
              <span className='text-xl text-red-400 font-medium dark:text-white'>{index + 1}</span>
              <Link to={`/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-violet-500 dark:text-white">
                {`${question.question.slice(0, 40)}...`}
              </Link>
              <ArchiveBoxIcon 
                className="size-5 text-violet-500 cursor-pointer dark:text-white" 
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
            <h2 className="text-lg font-bold dark:text-white">Изученные вопросы:</h2>
            <span className='text-gray-400'>Количество вопросов которые ты знаешь {crossedQuestionsList.length}</span>
            {crossedQuestionsList.map((question) => (
              <div key={question.id} className="flex justify-between items-center px-7 h-16 bg-violet-100 rounded-full opacity-50 line-through dark:bg-slate-500">
                <Link to={`/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-violet-500 dark:text-white">
                  {`${question.question.slice(0, 40)}...`}
                </Link>
                <ArchiveBoxIcon 
                  className="size-5 text-violet-500 cursor-pointer dark:text-white" 
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

export default TopQuestions;
