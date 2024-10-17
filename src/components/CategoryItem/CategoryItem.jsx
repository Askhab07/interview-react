import React, { useState, useEffect } from 'react';
import './categoryItem.css';
// import deleteIcon from '../../assets/delete.svg';
// import axios from 'axios';

const CategoryItem = ({ text, onClick, number, setQuizData, id }) => {
  const localStorageKey = `checkbox-${id}`;
  const [isChecked, setIsChecked] = useState(false);
  // const handleDelete = (e) => {
  //   e.stopPropagation()
  //     axios.delete(`https://script.google.com/macros/s/AKfycbwG6_UBsY-eojtHXni_35EmRgPy_cNlBfewEMEbOuTCM9XVTft5l9p_2mbRCuxA9QBm/exec${id}`)
  //       .then(response => {
  //         console.log(response.data.message);
  //         setQuizData(prevData => prevData.filter(q => q.id !== id)); // Удаляем вопрос из состояния
  //       })
  //       .catch(error => {
  //         console.error('Error deleting question:', error);
  //       });
  //   };

  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey);
    if (savedState === 'true') {
      setIsChecked(true);
    }
  }, [localStorageKey]);

  // Обработчик изменения чекбокса
  const handleCheckbox = (e) => {
    e.stopPropagation();
    const newState = !isChecked;
    setIsChecked(newState);
    localStorage.setItem(localStorageKey, newState); // Сохраняем новое состояние
  };

  return (
    <>
      {text.length > 0 ? (
        <div onClick={onClick} className="category-item">
          <input
            onClick={handleCheckbox}
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <div className="number">{number}</div>
          <div className={`category-item-text ${isChecked ? 'crossed-text' : ''}`}>
            {text.length < 40 ? text : text.slice(0, 40) + '...'}
          </div>
          {/* <img src={deleteIcon} alt="" /> */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryItem;
