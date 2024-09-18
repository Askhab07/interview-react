import React from 'react';
import '../../styles/CategoryItem.css';
import deleteIcon from '../../assets/delete.svg';
import axios from 'axios';

const CategoryItem = ({text, onClick, setQuizData, id}) => {

    const handleDelete = (e) => {
      e.stopPropagation()
        axios.delete(`https://script.google.com/macros/s/AKfycbzChIsH0FsUFaLYVL9ONfT2rAlUH2B64F30UwAc6nYBmLdeb6GtvX1wix7CP1kHuf7E/exec${id}`)
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