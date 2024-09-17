import React from 'react';
import '../../styles/CategoryItem.css';

const CategoryItem = ({text, onClick}) => {
    return (
        <div onClick={onClick} className='category-item'>
            {text}
        </div>
    );
};

export default CategoryItem;