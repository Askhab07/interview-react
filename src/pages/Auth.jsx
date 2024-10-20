import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Импортируем контекст

const Auth = ({ setAdmin }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(''); // Локальный стейт для логина
  const [password, setPassword] = useState(''); // Локальный стейт для пароля
  const [active, setActive] = useState(false); // Стейт для отображения формы

  const { data } = useContext(AppContext); // Получаем данные из контекста

  const handleLogin = () => {
    
    const user = data.admin.find((u) => u.admin === login && u.password === password);

    if (user) {
      setAdmin(1); 
      navigate('/'); 
    } else {
      alert('Неправильный логин или пароль'); // Если данные неверны
    }
  };

  const handleGuest = () => {
    navigate('/')
    setAdmin(2)
  }

  return (
    <div className="w-full h-screen p-5 flex flex-col gap-20 justify-center items-center dark:bg-slate-800">
      <h1 className='text-3xl font-bold dark:text-white'>Добро пожаловать</h1>
      {active && (
        <div className='w-full flex flex-col gap-5'>
          <input
            className='bg-violet-100 h-16 rounded-full p-5 text-violet-500 text-xl outline-violet-500 dark:text-white dark:bg-slate-600 dark:outline-slate-500'
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)} // Обновляем стейт логина
          />
          <input
            className='bg-violet-100 h-16 rounded-full p-5 text-violet-500 text-xl outline-violet-500 dark:text-white dark:bg-slate-600 dark:outline-slate-500'
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Обновляем стейт пароля
          />
        </div>
      )}

      {active ? (
        <button
          className="w-full h-16 font-semibold text-xl rounded-full text-violet-500 bg-violet-50 dark:bg-slate-600 dark:text-white"
          onClick={handleLogin} // Проверяем логин и пароль при нажатии
        >
          Войти
        </button>
      ) : (
        <button
          className="w-full h-16 font-semibold text-xl rounded-full text-violet-500 bg-violet-50 dark:bg-slate-600 dark:text-white"
          onClick={handleGuest} // Войти как гость
        >
          Войти как гость
        </button>
      )}


      {!active ? (
        <button
          className="fixed bottom-0 mb-5 text-violet-500 dark:text-white"
          onClick={() => setActive(true)} // Показать форму для админа
        >
          Войти как админ
        </button>
      ):
      (<button
        className="fixed bottom-0 mb-5 text-violet-500 dark:text-white"
        onClick={() => setActive(false)} // Показать форму для админа
      >
        Войти как гость
      </button>)}
    </div>
  );
};

export default Auth;
