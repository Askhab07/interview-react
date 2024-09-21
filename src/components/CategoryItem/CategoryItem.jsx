import React from 'react';
import '../../styles/CategoryItem.css';
// import deleteIcon from '../../assets/delete.svg';
// import axios from 'axios';

const CategoryItem = ({ text, onClick, setQuizData, id }) => {
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

  return (
    <>
      {text.length > 0 ? (
        <div onClick={onClick} className="category-item">
          <div className='category-item-text'>{text.length < 45 ? text : text.slice(0, 45) + '...'}</div>
          {/* <img src={deleteIcon} alt="" /> */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryItem;
