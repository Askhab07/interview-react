import { useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Questions from './layout/Questions';
import Question from './components/Question';
import Code from './layout/Code';
import TopQuestions from './layout/TopQuestions';
import Detailed from './layout/Detailed';
import Interview from './pages/Interview';
import Education from './pages/Education';
import InterQuestions from './layout/InterQuestions';
import InterQuestion from './components/InterQuestion';
import InterCode from './layout/InterCode';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';

function App() {
  const [admin, setAdmin] = useState(() => {
    const savedAdmin = localStorage.getItem('admin');
    return savedAdmin ? JSON.parse(savedAdmin) : 0;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
  }, []);
  
  useEffect(() => {
    // Проверяем, авторизован ли пользователь при загрузке приложения
    if (admin === 0) {
      navigate('/auth'); // Если не авторизован, перенаправляем на страницу авторизации
    }
  }, [admin, navigate]);

  useEffect(() => {
    localStorage.setItem('admin', JSON.stringify(admin));
  }, [admin]);

  return (
      <>
      {/* basename="/interview-react-app" */}
        <Routes>
          <Route path="/auth" element={<Auth setAdmin={setAdmin} />} />
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Questions />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/question/:id/detailed" element={<Detailed />} />
          <Route path="/question/:id/code" element={<Code />} />
          <Route path="/top" element={<TopQuestions />} />
          <Route path="/education" element={<Education />} />
          <Route path="/inter" element={<Interview />} />
          <Route path="/inter/:company" element={<InterQuestions />} />
          <Route path="/inter/question/:id" element={<InterQuestion />} />
          <Route path="/inter/question/:id/code" element={<InterCode />} />
          <Route path="/profile" element={<Profile setAdmin={setAdmin} />} />
        </Routes>
        {admin === 1 && (
          <Navbar />
        )}
        {admin === 2 && (
          <div className='p-5 fixed bottom-0 w-full h-20 bg-white flex items-center justify-between dark:bg-slate-800 border-t-2'>
            <Link className='flex flex-col items-center dark:text-white' to="/auth" onClick={() => setAdmin(0)}><ArrowLeftStartOnRectangleIcon className='size-6 text-violet-500 dark:text-white'/>Выйти</Link>
          </div>
        )}
      </>
  );
}

export default App;

// Добавить обучение
// Добавить задачки
// Добавить уровни к вопросам