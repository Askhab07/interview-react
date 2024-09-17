import React from 'react';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import Button from '../components/Button/Button';
import '../styles/CategoriesList.css';
import {quiz} from '../db/database';


const CategoriesList = ({setPages, setActiveId, selectedCategory}) => {

  const filterQuiz = quiz.filter(q => q.category === selectedCategory)

  const handleClick = () => {
    setPages(1)
  }

  return (
    <div className="categories-list">
      <h2 className="h2">Preparing for an interview</h2>
      <p>Fresh virtual card will be on your way!</p>
      <div className="categories-list-list">
        {filterQuiz.map(q => <CategoryItem key={q.id} onClick={() => setActiveId(q.id)} text={q.question} />)}
      </div>
      <Button onClick={handleClick} text="Back to go" />
    </div>
  );
};

export default CategoriesList;
