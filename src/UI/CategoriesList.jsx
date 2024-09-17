import React from 'react';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import Button from '../components/Button/Button';
import '../styles/CategoriesList.css';

const CategoriesList = ({setPages}) => {

  const handleClick = () => {
    setPages(1)
  }

  const handleQuiz = () => [setPages(2)];

  return (
    <div className="categories-list">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <div className="categories-list-list">
        <CategoryItem onClick={handleQuiz} text="HTML-это" />
        <CategoryItem onClick={handleQuiz} text="HTML-это" />
        <CategoryItem onClick={handleQuiz} text="HTML-это" />
      </div>
      <Button onClick={handleClick} text="Back to go" />
    </div>
  );
};

export default CategoriesList;
