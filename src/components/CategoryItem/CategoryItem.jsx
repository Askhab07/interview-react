import React from 'react';
import '../../styles/CategoryItem.css';
import deleteIcon from '../../assets/delete.svg';
import axios from 'axios';

const CategoryItem = ({text, onClick, setQuizData}) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/quiz/${id}`)
          .then(response => {
            console.log(response.data.message);
            setQuizData(prevData => prevData.filter(q => q.id !== id)); // Удаляем вопрос из состояния
          })
          .catch(error => {
            console.error('Error deleting question:', error);
          });
      };

    return (
        <div onClick={onClick} className='category-item'>
            {text}
            <img onClick={handleDelete} src={deleteIcon} alt="" />
        </div>
    );
};

export default CategoryItem;