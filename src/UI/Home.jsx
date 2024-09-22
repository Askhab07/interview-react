import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Quiz from '../components/Quiz/Quiz';
import Button from '../components/Button/Button';
import axios from 'axios';

const Home = ({setPages, activeId, setActiveId}) => {

    const [quizData, setQuizData] = useState(() => {
      const savedData = localStorage.getItem('quizData');
    return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
      if (quizData.length === 0) {
        axios.get('https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec')
          .then(response => {
            if (response.data) {
              setQuizData(response.data); // Сохраняем данные из базы в состояние
              localStorage.setItem('quizData', JSON.stringify(response.data)); // Кэшируем данные
            }
          })
          .catch(error => {
            console.error('Error fetching quiz data:', error);
          });
      } else {
        // Проверка актуальности данных на сервере
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

    const activeQuiz = quizData.find(q => q.id === activeId)

    const handleClick = () => {
        setPages(4)
        setActiveId(null)
    }

    return (
        <main className='home'>
            <h2 className='h2'>Preparing for an interview</h2>
            <div className='quiz-list'>
            {activeQuiz && <Quiz category={activeQuiz.category} title={activeQuiz.question} text={activeQuiz.answer} />}
            </div>
            <Button onClick={handleClick} text='Back to go' />
        </main>
    );
};

export default Home;