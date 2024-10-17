import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ArchiveBoxIcon } from '@heroicons/react/16/solid';

const Questions = () => {
  const { category } = useParams(); // Получаем категорию из URL
  const { categories } = useContext(AppContext);

  // Фильтруем вопросы по категории
  const filteredQuestions = categories.filter((q) => q.category === category);

const handleClick = () => {

}

  return (
    <div className="w-full p-5 mb-20">
      <h1 className="text-xl font-bold mb-5">
        Вопросы из категории: {category}
      </h1>
      <div className="flex flex-col gap-4">
        {filteredQuestions.length > 1 ? (
          filteredQuestions.map((question) => (
            <Link key={question.id} to={`/question/${question.id}`}>
              <div className="flex justify-between items-center px-7 h-16 bg-violet-100 rounded-full">
                <span>{question.length}</span>
                <h2 className="w-64 text-l font-semibold text-violet-500">
                  {question.question.slice(0, 40)}
                </h2>
                <ArchiveBoxIcon className="size-5 text-violet-500" onClick={handleClick}/>
              </div>
            </Link>
          ))
        ) : (
          <p>Нет вопросов в этой категории.</p>
        )}
      </div>
    </div>
  );
};

export default Questions;
