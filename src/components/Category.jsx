import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';

const Category = ({ text, top }) => {
  return (
      <div
        className={`flex justify-between items-center px-7 h-16 dark:bg-slate-500 bg-blue-100 rounded-full ${top}`}
      >
        <h3 className={`text-xl font-semibold dark:text-white text-blue-500`}>{text}</h3>
        <ArrowRightCircleIcon className='size-6 dark:text-white text-blue-500'/>
      </div>
  );
};

export default Category;
