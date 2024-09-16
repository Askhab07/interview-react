import React from 'react';
import '../styles/Home.css';
import Quiz from '../components/Quiz/Quiz';
import Button from '../components/Button/Button';

const Home = ({setPages}) => {

    const handleClick = () => {
        setPages(1)
    }

    return (
        <main className='home'>
            <h2 className='h2'>Preparing for an interview</h2>
            <p>Fresh virtual card will be on your way!</p>
            <Quiz />
            <Button onClick={handleClick} text='Back to go' />
        </main>
    );
};

export default Home;