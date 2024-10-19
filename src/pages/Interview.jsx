import Company from '../layout/Company';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Interview = () => {
  const { data } = useContext(AppContext);

  const uniqueCategories = [...new Set(data.inter.map((c) => c.company))];

  return (
    <div className="w-full p-5">
      <h2 className="text-xl font-bold mb-5">Собеседование</h2>
      <div className="flex flex-col gap-4 h-full mb-24">
        {uniqueCategories.map((c) => (
          <Link key={c} to={`/inter/${c}`}>
            <Company text={c} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Interview;
