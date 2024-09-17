import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import '../styles/Categories.css';
import Category from '../components/Category/Category';
import axios from 'axios';


const Categories = ({ setPages, setSelectedCategory }) => {

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/quiz')
      .then(response => {
        setQuizData(response.data.data); // Сохраняем данные из базы в состояние
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
      });
  }, [])
  
  const uniqueCategories = [...new Set(quizData.map(item => item.category))];

  const handleQuizList = (category) => {
    setSelectedCategory(category)
    setPages(4)
  };

  const handleClick = () => {
    setPages(3);
  };

  return (
    <div className="categories">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <div className="category-list">
        {uniqueCategories.map((q, i) => <Category key={i} onClick={() => handleQuizList(q)} text={q} />)}
      </div>
      <Button onClick={handleClick} text="Create quiz" />
    </div>
  );
};

export default Categories;
