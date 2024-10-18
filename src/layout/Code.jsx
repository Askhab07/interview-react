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
  const { categories } = useContext(AppContext); // Достаем категории из контекста
  const navigate = useNavigate();

  const filteredQuestion = categories.find((q) => q.id === parseInt(id));

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    hljs.highlightElement(codeRef.current); // Подсвечиваем код
  }, []);

  // Определите язык динамически, если у вас есть эта информация
  const language = filteredQuestion ? filteredQuestion.category : 'plaintext'; // Предполагается, что `filteredQuestion` содержит язык

  return (
    <div className="h-screen p-5">
      <pre className="border-2 border-violet-100 rounded-lg text h-4/6 overflow-scroll">
        <code ref={codeRef} className={`h-full language-${language}`}>
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
