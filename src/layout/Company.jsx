import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Company = ({text}) => {
    return (
        <div
        className="flex justify-between items-center px-7 h-16 bg-blue-100 rounded-full dark:bg-slate-500"
      >
        <h3 className='text-xl font-semibold text-blue-500 dark:text-white'>{text}</h3>
        <ArrowRightCircleIcon className='size-6 text-blue-500 dark:text-white'/>
      </div>
    );
};

export default Company;