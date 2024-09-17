import React from 'react';
import Button from '../components/Button/Button';
import '../styles/Categories.css';
import Category from '../components/Category/Category';

const Categories = ({ setPages }) => {
  const handleClick = () => {
    setPages(3);
  };

  const handleQuizList = () => [setPages(4)];

  return (
    <div className="categories">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <div className="category-list">
        <Category onClick={handleQuizList} text="HTML" />
        <Category onClick={handleQuizList} text="CSS" />
        <Category onClick={handleQuizList} text="JavaScript" />
        <Category onClick={handleQuizList} text="React" />
      </div>
      <Button onClick={handleClick} text="Create quiz" />
    </div>
  );
};

export default Categories;
