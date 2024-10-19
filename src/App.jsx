import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Profile from './pages/Profile';
import AddQuestion from './pages/Interview';
import Auth from './pages/Auth';
import Questions from './layout/Questions';
import { AppProvider } from './context/AppContext';
import Question from './components/Question';
import Code from './layout/Code';
import TopQuestions from './layout/TopQuestions';
import Detailed from './layout/Detailed';

function App() {
  const [admin, setAdmin] = useState(true);

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/interview-react/auth" element={<Auth />} />
          <Route path="/interview-react/" element={<Home />} />
          <Route path="/interview-react/:category" element={<Questions />} />
          <Route path="/interview-react/question/:id" element={<Question />} />
          <Route path="/interview-react/question/:id/detailed" element={<Detailed />} />
          <Route path="/interview-react/question/:id/code" element={<Code />} />
          <Route path="/interview-react/top" element={<TopQuestions />} />
          <Route path="/interview-react/add" element={<AddQuestion />} />
          <Route path="/interview-react/profile" element={<Profile />} />
        </Routes>
      {admin ? <Navbar /> : null}
      </Router>
    </AppProvider>
  );
}

export default App;

// Добавить Собесы который проходил
// Добавить Войти как гость или админ
// Сделать еще адаптивнее
// Добавить поиск
// Добавить обучение
// Добавить изменение темы и можно изменить цвета вопросов