import Category from '../components/Category';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { filterTopQuestionsAndCategories } from '../hooks/filterTopQuestions';

const TopCategory = () => {
  const { data } = useContext(AppContext);
  const { uniqueCategories } = filterTopQuestionsAndCategories(data.quiz); // Фильтруем топовые категори
  // const topQuestions = data.quiz.filter((q) => q.top);

  // const uniqueCategories = [...new Set(topQuestions.map((q) => q.category))];

  return (
    <div className="w-full p-5">
      <h1 className="text-xl font-bold mb-5">Топ вопросы</h1>
      <div className="flex flex-col gap-4 h-full mb-24">
        {uniqueCategories.map((c) => (
          <Link key={c} to={`/top/${c}`}>
            {c.length > 0 && <Category text={c} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
