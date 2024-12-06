import React, { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ArchiveBoxIcon } from '@heroicons/react/16/solid';
import usePersistedState from '../hooks/usePersistedState';
import FilterQuestion from '../components/FilterQuestion';

const Questions = () => {
  const navigate = useNavigate();
  const { category } = useParams(); // Получаем категорию из URL
  const { data } = useContext(AppContext);
  const [selectedLevel, setSelectedLevel] = usePersistedState('selectedLevel','');

  const handleBack = () => {
    navigate(-1);
  };

  // Фильтруем вопросы по категории
  const filteredQuestions = data.quiz.filter(
    (q) => q.category === category && (selectedLevel === '' || q.level === selectedLevel)
  );
  
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

  return (
    <div className="w-full p-5 mb-20 dark:bg-slate-800">
      <h1 className="text-xl font-bold mb-3 dark:text-white">
        Вопросы из категории: {category}
      </h1>
      <span className='text-gray-400'>Количество вопросов для изучение: {uncrossedQuestions.length}</span>
      <FilterQuestion selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
      <div className="flex flex-col gap-4 mt-5 mb-14">
        {/* Отображаем неперечеркнутые вопросы */}
        {uncrossedQuestions.length > 0 ? (
          uncrossedQuestions.map((question, index) => (
            <div key={question.id} className="flex justify-between items-center px-5 h-16 bg-blue-100 rounded-full dark:bg-slate-500">
              <span className='text-xl text-red-400 font-medium dark:text-white'>{index + 1}</span>
              <Link to={`/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-blue-500 dark:text-white">
                {`${question.question.slice(0, 40)}...`}
              </Link>
              <ArchiveBoxIcon 
                className="size-5 text-blue-500 cursor-pointer dark:text-white" 
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
              <div key={question.id} className="flex justify-between items-center px-7 h-16 dark:bg-slate-500 bg-blue-100 rounded-full opacity-50 line-through">
                <Link to={`/question/${question.id}`} className="flex items-center w-64 h-12 text-l font-semibold text-blue-500 dark:text-white">
                  {`${question.question.slice(0, 40)}...`}
                </Link>
                <ArchiveBoxIcon 
                  className="size-5 dark:text-white text-blue-500 cursor-pointer" 
                  onClick={() => handleClick(question.id)} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className="fixed translate-x-3 bottom-4 w-5/6 h-12 mt-5 mb-20 font-semibold text-xl rounded-xl text-blue-500 bg-blue-50 dark:text-white dark:bg-slate-800 border-[1px] border-blue-500"
        onClick={handleBack}
      >
        Назад
      </button>
    </div>
  );
};

export default Questions;