import React, { useEffect, useState } from 'react';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import Button from '../components/Button/Button';
import '../styles/CategoriesList.css';
import axios from 'axios';

const CategoriesList = ({setPages, setActiveId, selectedCategory}) => {

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios.get('https://script.google.com/macros/s/AKfycbzChIsH0FsUFaLYVL9ONfT2rAlUH2B64F30UwAc6nYBmLdeb6GtvX1wix7CP1kHuf7E/exec')
      .then(response => {
        setQuizData(response.data); // Сохраняем данные из базы в состояние
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
      });
  }, [])

  const filterQuiz = quizData.filter(q => q.category === selectedCategory)

  const handleClick = () => {
    setPages(1)
  }

  return (
    <div className="categories-list">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <div className="categories-list-list">
        {filterQuiz.map(q => <CategoryItem key={q.id} onClick={() => setActiveId(q.id)} id={q.id} text={q.question} setQuizData={setQuizData} />)}
      </div>
      <Button onClick={handleClick} text="Back to go" />
    </div>
  );
};

export default CategoriesList;