import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('questions');
    return savedData ? JSON.parse(savedData) : { quiz: [], inter: [], admin: [], task: []};
  });
  
  console.log(data);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyjLY68LbMZL2TsH7lFEgZg6YIRLYGKUR_OKMmgmVxroUKmNirH9mgWc2O9AL3j0kfs/exec');
      const newData = await response.json();
      
      const storedData = localStorage.getItem('questions');
      
      if (JSON.stringify(newData) !== storedData) {
        localStorage.setItem('questions', JSON.stringify(newData));
        setData(newData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (data.quiz.length === 0 && data.inter.length === 0 && data.admin.length === 0 && data.task.length === 0) {
      fetchData();
    } else {
      fetchData();
    }
  }, [data]);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };