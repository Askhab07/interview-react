import React from 'react';
import '../../styles/Quiz.css';

const Quiz = ({title, text, category}) => {

    return (
        <div className='quiz'>
            <div className="quiz-title">
                <h3>{category}</h3>
                <h4>{title}</h4>
            </div>
            <div className={`quiz-text`}>
            {text}
            </div>
        </div>
    );
};

export default Quiz;