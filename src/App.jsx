import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Questions from './layout/Questions';
import { AppProvider } from './context/AppContext';
import Question from './components/Question';
import Code from './layout/Code';
import TopQuestions from './layout/TopQuestions';
import Detailed from './layout/Detailed';
import Interview from './pages/Interview';
import Education from './pages/Education';
import InterQuestions from './layout/InterQuestions';
import InterQuestion from './components/InterQuestion';

function App() {
  const [admin, setAdmin] = useState(true);

  return (
    <AppProvider>
      {/* basename="/interview-react-app" */}
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      {admin ? <Navbar /> : null}
      </Router>
    </AppProvider>
  );
}

export default App;

// Добавить Войти как гость или админ
// Сделать еще адаптивнее
// Добавить поиск
// Добавить обучение
// Добавить изменение темы и можно изменить цвета вопросов
// Добавить loading