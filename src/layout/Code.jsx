import React, { useContext, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Выберите стиль
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/xml'; // Для HTML и JSX

const Code = () => {
  const codeRef = useRef(null);
  const { id } = useParams(); // Получаем параметр id из URL
  const { data } = useContext(AppContext); // Достаем категории из контекста
  const navigate = useNavigate();

  const filteredQuestion = data.quiz.find((q) => q.id === parseInt(id));

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    hljs.highlightElement(codeRef.current); // Подсвечиваем код
  }, []);

  // Определите язык динамически, если у вас есть эта информация
  const language = filteredQuestion ? filteredQuestion.category : 'plaintext'; // Предполагается, что `filteredQuestion` содержит язык

  return (
    <div className="p-5">
      <pre className="w-full border-2 break-words border-violet-100 rounded-xl mb-36">
        <code ref={codeRef} className={`w-full border-violet-100 rounded-xl text-xs whitespace-pre-wrap language-${language}`}>
          {filteredQuestion ? filteredQuestion.code : 'Код не найден для данного вопроса.'}
        </code>
      </pre>
      <button
        className="fixed translate-x-3 bottom-4 w-5/6 h-12 mt-5 mb-20 font-semibold text-xl rounded-xl text-violet-500 bg-violet-50"
        onClick={handleClick}
      >
        Назад
      </button>
    </div>
  );
};

export default Code;
