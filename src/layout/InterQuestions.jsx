import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import usePersistedState from '../hooks/usePersistedState';
import { ArchiveBoxIcon } from '@heroicons/react/24/solid';

const InterQuestions = () => {
    const {company} = useParams()
    const {data} = useContext(AppContext);

    const filterCompany = data.inter.filter((c) => c.company === company);


    const [crossedQuestions, setCrossedQuestions] = usePersistedState('crossedQuestions', []);

  const handleClick = (id) => {
    setCrossedQuestions((prev) => 
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    );
  };

  // Разделяем вопросы на перечеркнутые и неперечеркнутые
  const uncrossedQuestions = filterCompany.filter(q => !crossedQuestions.includes(q.id));
  const crossedQuestionsList = filterCompany.filter(q => crossedQuestions.includes(q.id));

  const level = uncrossedQuestions[0].level === 'Junior' ? 'text-green-500' : uncrossedQuestions[0].level === 'Middle' ? 'text-orange-500' : uncrossedQuestions[0].level === 'Senior' ? 'text-red-500' : 'text-gray-400';

  return (
    <div className="w-full p-5 mb-20">
      <h1 className="text-xl font-bold mb-3">
        Вопросы из компании: {company}
      </h1>
      <span className={`${level}`}>Уровень {uncrossedQuestions[0].level}</span>
      <div className="flex flex-col gap-4 mt-5">
        {/* Отображаем неперечеркнутые вопросы */}
        {uncrossedQuestions.length > 0 ? (
          uncrossedQuestions.map((question, index) => (
            <div key={question.id} className="flex justify-between items-center px-5 h-16 bg-violet-100 rounded-full">
              <span className='text-xl text-red-400 font-medium'>{index + 1}</span>
              <Link to={`/inter/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-violet-500">
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
                <Link to={`/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-violet-500">
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

export default InterQuestions;