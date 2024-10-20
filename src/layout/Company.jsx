import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Company = ({text}) => {
    return (
        <div
        className="flex justify-between items-center px-7 h-16 bg-violet-100 rounded-full dark:bg-slate-500"
      >
        <h3 className='text-xl font-semibold text-violet-500 dark:text-white'>{text}</h3>
        <ArrowRightCircleIcon className='size-6 text-violet-500 dark:text-white'/>
      </div>
    );
};

export default Company;