import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import '../styles/Categories.css';
import Category from '../components/Category/Category';
import axios from 'axios';


const Categories = ({ setPages, setSelectedCategory }) => {

  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);

    axios.get('https://script.google.com/macros/s/AKfycbzChIsH0FsUFaLYVL9ONfT2rAlUH2B64F30UwAc6nYBmLdeb6GtvX1wix7CP1kHuf7E/exec')
      .then(response => {
        // Проверьте, что response.data и response.data.data существуют
        if (response.data && response.data) {
          setQuizData(response.data); // Сохраняем данные в состоянии
          setIsLoading(false)
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
        setIsLoading(false)
      });
  }, []);
  
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
        {isLoading ? <div className='loading'>Загрузка идет братан подожди немного...</div> : (uniqueCategories.map((q, i) => <Category key={i} onClick={() => handleQuizList(q)} text={q} />))}
      </div>
      <Button onClick={handleClick} text="Create quiz" />
    </div>
  );
};

export default Categories;
