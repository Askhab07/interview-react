import { useState } from 'react';
import './App.css';
import Home from './UI/Home';
import Categories from './UI/Categories';
import Create from './UI/Create';

function App() {
  const [pages, setPages] = useState(1);

  return (
    <div className="app">
      {pages === 1 && <Categories setPages={setPages} />}
      {pages === 2 && <Home setPages={setPages} />}
      {pages === 3 && <Create setPages={setPages} />}
    </div>
  );
}

export default App;
