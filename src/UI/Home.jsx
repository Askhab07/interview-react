import React from 'react';
import '../styles/Home.css';
import Quiz from '../components/Quiz/Quiz';
import Button from '../components/Button/Button';
import { quiz } from '../db/database';

const Home = ({setPages, activeId, setActiveId}) => {

    const activeQuiz = quiz.find(q => q.id === activeId)

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