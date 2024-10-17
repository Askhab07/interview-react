import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [categories, setCategories] = useState(() => {
    // Проверяем наличие данных в локальном хранилище при инициализации состояния
    const savedData = localStorage.getItem('questions');
    return savedData ? JSON.parse(savedData) : [];
  });

  const fetchData = async () => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec');
      const data = await response.json();

      // Получаем данные из localStorage для сравнения
      const storedData = localStorage.getItem('questions');
      
      // Сравниваем данные с сервера с сохранёнными данными
      if (JSON.stringify(data) !== storedData) {
        // Если данные изменились, обновляем localStorage и состояние
        localStorage.setItem('questions', JSON.stringify(data));
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Если данных нет в localStorage, загружаем их с сервера
    if (categories.length === 0) {
      fetchData();
    } else {
      // Если данные есть, проверяем их актуальность
      fetchData();
    }
  }, [categories]);

  return (
    <AppContext.Provider value={{ categories, setCategories }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
