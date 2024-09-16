import React from 'react';
// import CreateQuiz from '../components/CreateQuiz/CreateQuiz';
import Button from '../components/Button/Button';
import '../styles/Categories.css';
import Category from '../components/Category/Category';

const Categories = ({setPages}) => {

    const handleClick = () => {
        setPages(3)
    }

    const handleQuiz = () => [
        setPages(2)
    ]

    return (
        <div className='categories'>
            <h2 className='h2'>Preparing for an interview</h2>
            <p>Fresh virtual card will be on your way!</p>
            <Category onClick={handleQuiz} text='HTML'/>
            <Category onClick={handleQuiz} text='CSS' />
            <Category onClick={handleQuiz} text='JavaScript' />
            <Category onClick={handleQuiz} text='React' />
            <Button onClick={handleClick} text='Create quiz'/>
        </div>
    );
};

export default Categories;