import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/home/Home';
import Navbar from './layout/Navbar';
import Profile from './pages/profile/Profile';
import AddQuestion from './pages/add-question/AddQuestion';
import Chat from './pages/chat/Chat';
import Auth from './pages/auth/Auth';
import Questions from './layout/Questions';
import { AppProvider } from './context/AppContext';
import Question from './components/Question';

function App() {
  const [admin, setAdmin] = useState(true);

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Questions />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/add" element={<AddQuestion />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      {admin ? <Navbar /> : null}
      </Router>
    </AppProvider>
  );
}

export default App;

// Сделать сортировку кода
// Добавить react-router-dom
// Добавить context react
// Добавить назад текущему месту
// Добавить просмотр кода
// Добавить chatGPT
// Добавить нижний панель question, chatgpt, add question, profile
// Добавить отзывчевую вверстку
// Добавить tailwind
// 'https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec'
