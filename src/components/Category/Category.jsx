import React from 'react';
import '../../styles/Category.css';
import arrowIc from '../../assets/arrow.svg';

const Category = ({text, onClick}) => {
    return (
        <div onClick={onClick} className='category'>
            <h3>{text}</h3>
            <img src={arrowIc} alt="" />
        </div>
    );
};

export default Category;