import React, { useEffect, useState } from 'react';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import Button from '../components/Button/Button';
import '../styles/CategoriesList.css';
import axios from 'axios';

const CategoriesList = ({setPages, setActiveId, selectedCategory}) => {

  const [quizData, setQuizData] = useState(() => {
    const savedData = localStorage.getItem('quizData');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // Проверяем, если данных нет, то делаем запрос
    if (quizData.length === 0) {
      axios.get('https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec')
        .then(response => {
          if (response.data) {
            setQuizData(response.data); // Сохраняем данные в состояние
            localStorage.setItem('quizData', JSON.stringify(response.data)); // Кэшируем данные
          }
        })
        .catch(error => {
          console.error('Error fetching quiz data:', error);
        });
    } else {
      // Если данные уже есть в localStorage, проверяем актуальность
      axios.get('https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec')
        .then(response => {
          const serverData = response.data;
          const cachedData = localStorage.getItem('quizData');
          if (JSON.stringify(serverData) !== cachedData) {
            // Обновляем данные, если они изменились на сервере
            setQuizData(serverData);
            localStorage.setItem('quizData', JSON.stringify(serverData));
          }
        })
        .catch(error => {
          console.error('Error fetching quiz data:', error);
        });
    }
  }, [quizData]);

  const filterQuiz = quizData.filter(q => q.category === selectedCategory)

  const handleClick = () => {
    setPages(1)
  }

  return (
    <div className="categories-list">
      <h2 className="h2">Preparing for an interview</h2>
      <p className='p'>Количество вопросов {filterQuiz.length}</p>
      <div className="categories-list-list">
        {filterQuiz.map((q, i) => <CategoryItem number={i + 1} key={q.id} onClick={() => setActiveId(q.id)} id={q.id} text={q.question} setQuizData={setQuizData} />)}
      </div>
      <Button onClick={handleClick} text="Back to go" />
    </div>
  );
};

export default CategoriesList;