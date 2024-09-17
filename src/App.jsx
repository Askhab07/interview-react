import { useState } from 'react';
import './App.css';
import Home from './UI/Home';
import Categories from './UI/Categories';
import CategoriesList from './UI/CategoriesList';
import Create from './UI/Create';

function App() {
  const [pages, setPages] = useState(1);
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="app">
      {pages === 1 && <Categories setPages={setPages} />}
      {activeId === null && pages === 4 && <CategoriesList setActiveId={setActiveId} setPages={setPages} />}
      {pages === 3 && <Create setPages={setPages} />}
      {activeId !== null && <Home activeId={activeId} setActiveId={setActiveId} setPages={setPages}/>}
    </div>
  );
}

export default App;
