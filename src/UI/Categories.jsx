import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import '../styles/Categories.css';
import Category from '../components/Category/Category';
import axios from 'axios';


const Categories = ({ setPages, setSelectedCategory }) => {

  const [quizData, setQuizData] = useState(() => {
    // Инициализация данных из localStorage
    const savedData = localStorage.getItem('quizData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [isLoading, setIsLoading] = useState(quizData.length === 0);

  useEffect(() => {
    // Функция для получения данных и обновления при необходимости
    const fetchData = async () => {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec');
        
        if (response.data) {
          const serverData = response.data;

          // Проверяем, отличаются ли данные на сервере от данных в localStorage
          const cachedData = localStorage.getItem('quizData');
          const parsedCachedData = cachedData ? JSON.parse(cachedData) : [];

          if (JSON.stringify(serverData) !== JSON.stringify(parsedCachedData)) {
            // Если данные разные, обновляем состояние и localStorage
            setQuizData(serverData);
            localStorage.setItem('quizData', JSON.stringify(serverData));
          }

          setIsLoading(false);
        } else {
          console.error('Unexpected response format:', response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setIsLoading(false);
      }
    };

    // Загружаем данные из localStorage для быстрого отображения, затем проверяем свежесть данных на сервере
    if (quizData.length === 0) {
      setIsLoading(true); // Если данных нет, включаем загрузку
    }

    // Независимо от того, есть ли данные в localStorage, отправляем запрос к серверу для проверки
    fetchData();
  }, [quizData]);
  
  const uniqueCategories = [...new Set(quizData.map(item => item.category))];

  const handleQuizList = (category) => {
    setSelectedCategory(category)
    setPages(4)
  };

  const clickTests = () => {
    setPages(5);
  };


  return (
    <div className="categories">
      <h2 className="h2">Preparing for an interview</h2>
      <div className="category-list">
        {isLoading ? <div className='loading'>Загрузка идет братан подожди немного...</div> : (uniqueCategories.map((q, i) => <Category key={i} onClick={() => handleQuizList(q)} text={q} />))}
      </div>
      {/* <Button onClick={clickCreate} text="Create quiz" /> */}
      <Button onClick={clickTests} text="Quiz test" />
    </div>
  );
};

export default Categories;
