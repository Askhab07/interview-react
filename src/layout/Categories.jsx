import Category from '../components/Category';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { categories } = useContext(AppContext);

  const uniqueCategories = [...new Set(categories.map((c) => c.category))];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 h-full mb-24">
        {uniqueCategories.map((c) => (
          <Link key={c} to={`/${c}`}>
            <Category text={c} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
