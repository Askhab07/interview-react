import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Question = () => {
  const { id } = useParams();
  const { data } = useContext(AppContext);
  const navigate = useNavigate();

  let filteredQuestion = data.quiz.find((q) => q.id === parseInt(id));

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-between p-5 h-screen dark:bg-slate-800 dark:text-white">
      {filteredQuestion ? (
        <div className="flex-grow">
          <div className="w-full h-32 flex flex-col border-b-2 border-blue-300 mb-8 dark:border-slate-500">
            <h3 className="text-2xl font-semibold mb-3">
              {filteredQuestion.category}
            </h3>
            <h4 className="text-l font-medium">{filteredQuestion.question}</h4>
          </div>
          <div className="min-h-full h-5/6 mb-5">
            {filteredQuestion.answer}
            <span className="text-blue-500 italic underline">
              <Link
                className="dark:text-slate-500"
                to={`/question/${id}/detailed`}
              >
                Развернутый ответ.
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <p>Вопрос не найден.</p>
      )}
      <div className="flex justify-between mb-20">
        <button
          className="w-36 h-24 font-semibold text-xl rounded-2xl text-blue-500 bg-blue-50 dark:bg-slate-600 dark:text-white"
          onClick={handleClick}
        >
          Назад
        </button>
        <button className="w-36 h-24 font-semibold text-xl rounded-2xl text-blue-500 bg-blue-50 dark:bg-slate-600 dark:text-white">
          <Link to={`/question/${id}/code`}>
            Посмотреть
            <br />
            код
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Question;
