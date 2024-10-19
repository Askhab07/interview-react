import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Выберите стиль
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/xml';

const Detailed = () => {
  const codeRef = useRef(null);
  const { id } = useParams();
  const { data } = useContext(AppContext);
  const navigate = useNavigate();

  const filteredQuestion = data.quiz.find((q) => q.id === parseInt(id));

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    hljs.highlightElement(codeRef.current); // Подсвечиваем код
  }, []);

  const language = filteredQuestion ? filteredQuestion.category : 'plaintext'; // Предполагается, что `filteredQuestion` содержит язык

  return (
    <div className="w-full">
      <div className="break-words mb-36">
        <pre className="w-full whitespace-pre-wrap">
          <code className={`font-sans ${language}`} ref={codeRef}>
          {filteredQuestion.detailed}
          </code>
        </pre>
      </div>
      <button
        className="fixed translate-x-3 m-5 bottom-4 w-5/6 h-12 mt-5 mb-20 font-semibold text-xl rounded-xl text-violet-500 bg-violet-50"
        onClick={handleClick}
      >
        Назад
      </button>
    </div>
  );
};

export default Detailed;
