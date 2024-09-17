import React from 'react';
import Button from '../components/Button/Button';
import '../styles/Categories.css';
import Category from '../components/Category/Category';
import { quiz } from '../db/database';


const Categories = ({ setPages, setSelectedCategory }) => {
  
  const uniqueCategories = [...new Set(quiz.map(item => item.category))];

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
