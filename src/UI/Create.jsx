import React from 'react';
import CreateQuiz from '../components/CreateQuiz/CreateQuiz';
import Button from '../components/Button/Button';
import '../styles/Create.css';

const Create = ({setPages}) => {

    const handleClick = () => {
        setPages(1)
    }

    return (
        <div className='create'>
            <h2 className='h2'>Preparing for an interview</h2>
            <p>Fresh virtual card will be on your way!</p>
            <CreateQuiz />
            <Button onClick={handleClick} text='Create'/>
        </div>
    );
};

export default Create;