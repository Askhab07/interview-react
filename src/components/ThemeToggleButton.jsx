import React, { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="w-80 h-12 rounded-xl mb-5 bg-violet-100 text-violet-500 dark:bg-slate-600 dark:text-white">
      Переключить тему
    </button>
  );
};

export default ThemeToggleButton;
