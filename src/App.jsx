import { useState } from 'react';
import './App.css';
import Home from './UI/Home';
import Categories from './UI/Categories';
import CategoriesList from './UI/CategoriesList';
import Create from './UI/Create';
import Tests from './components/Tests/Tests';

function App() {
  const [pages, setPages] = useState(1);
  const [activeId, setActiveId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="app">
      {pages === 1 && <Categories setSelectedCategory={setSelectedCategory} setPages={setPages} />}
      {activeId === null && pages === 4 && <CategoriesList selectedCategory={selectedCategory} setActiveId={setActiveId} setPages={setPages} />}
      {pages === 3 && <Create setPages={setPages} />}
      {activeId !== null && <Home activeId={activeId} setActiveId={setActiveId} setPages={setPages}/>}
      {pages === 5 && <Tests setPages={setPages} />}
    </div>
  );
}

export default App;
