import Category from '../components/Category';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { data } = useContext(AppContext);
  const uniqueCategories = [...new Set(data.quiz.map((c) => c.category))];

  return (
    <div className="w-full mb-8">
      <div className="flex flex-col gap-4 h-full mb-24">
          <Link to='/top'>
          <Category text="Топ вопросы" top={'uppercase animate-pulse'} />
        </Link>
        {uniqueCategories.map((c) => (
          <Link key={c} to={`/${c}`}>
            {c.length > 0 && <Category text={c} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
