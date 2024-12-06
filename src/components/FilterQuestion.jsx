import React from 'react';

const FilterQuestion = ({ selectedLevel, setSelectedLevel }) => {
  const handleChange = (e) => {
    setSelectedLevel(e.target.value); // Обновляем родительское состояние
  };

  return (
    <select
      value={selectedLevel} // Синхронизируем с состоянием родителя
      onChange={handleChange}
      className={`${
        selectedLevel === 'Junior'
          ? 'pl-9 text-green-500'
          : selectedLevel === 'Middle'
          ? 'pl-9 text-yellow-500'
          : selectedLevel === 'Senior'
          ? 'pl-9 text-red-500'
          : 'px-3 text-blue-500'
      } mt-2 text-lg font-semibold bg-blue-100 rounded-full outline-none appearance-none`}
    >
      <option value="">Все уровни</option>
      <option value="Junior">Junior</option>
      <option value="Middle">Middle</option>
      <option value="Senior">Senior</option>
    </select>
  );
};

export default FilterQuestion;
