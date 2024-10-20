import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

function SearchQuestions() {
  const { data } = useContext(AppContext);
  const [query, setQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    if (data && data.quiz && query) {
      setFilteredQuestions(
        data.quiz.filter(
          (question) =>
            question.question &&
            question.question.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredQuestions([]);
    }
  }, [query, data]);

  return (
    <div className="dark:bg-slate-800 text-white ">
      <input
        type="text"
        placeholder="Поиск вопроса..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="dark:text-white dark:bg-slate-800 dark:outline-white w-full h-10 mb-5 border-2 border-violet-100 outline-violet-500 rounded-full px-5 text-xl"
      />

      <ul className="flex flex-col gap-5">
        {filteredQuestions.length > 0
          ? filteredQuestions.map((question) => (
              <li className="dark:text-white dark:bg-slate-500 h-16 px-5 last:mb-5 flex items-center border-2 rounded-full text-violet-500">
                <Link
                  key={question.id}
                  to={`/question/${question.id}`}
                  className="flex gap-2 items-center"
                >
                  <div>
                    <MagnifyingGlassCircleIcon className="size-8 dark:text-white text-violet-500" />
                  </div>
                  {question.question.slice(0, 50)}
                </Link>
              </li>
            ))
          : query && <li>No questions found</li>}
      </ul>
    </div>
  );
}

export default SearchQuestions;
