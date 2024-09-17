import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Quiz from '../components/Quiz/Quiz';
import Button from '../components/Button/Button';
import axios from 'axios';

const Home = ({setPages, activeId, setActiveId}) => {

    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/quiz')
          .then(response => {
            setQuizData(response.data.data); // Сохраняем данные из базы в состояние
          })
          .catch(error => {
            console.error('Error fetching quiz data:', error);
          });
      }, [])

    const activeQuiz = quizData.find(q => q.id === activeId)

    const handleClick = () => {
        setPages(4)
        setActiveId(null)
    }

    return (
        <main className='home'>
            <h2 className='h2'>Preparing for an interview</h2>
            <p>Fresh virtual card will be on your way!</p>
           {activeQuiz && <Quiz category={activeQuiz.category} title={activeQuiz.question} text={activeQuiz.answer} />}
            <Button onClick={handleClick} text='Back to go' />
        </main>
    );
};

export default Home;