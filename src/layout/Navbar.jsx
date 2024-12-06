import React from 'react';
import { NavLink} from 'react-router-dom';
import { HomeIcon, UserCircleIcon, CommandLineIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 dark:bg-slate-800 bg-white w-full text-xs border-t-2 h-20'>
      <ul className='flex justify-between items-center h-16'>
        <li><NavLink className={({isActive}) => `flex flex-col gap-1 items-center w-20 ${[isActive ? 'text-blue-500' : '']} dark:text-white`} to='/'><HomeIcon className='size-6 dark:text-white '/>Главная</NavLink></li>
        <li><NavLink className={({isActive}) => `flex flex-col gap-1 items-center w-20 ${[isActive ? 'text-blue-500' : '']} dark:text-white`} to='/education'><AcademicCapIcon className='size-6 dark:text-white'/>Обучение</NavLink></li>
        <li><NavLink className={({isActive}) => `flex flex-col gap-1 items-center w-20 ${[isActive ? 'text-blue-500' : '']} dark:text-white`} to='/inter'><CommandLineIcon className='size-6 dark:text-white'/>Собеседование</NavLink></li>
        <li><NavLink className={({isActive}) => `flex flex-col gap-1 items-center w-20 ${[isActive ? 'text-blue-500' : '']} dark:text-white`} to='/profile'><UserCircleIcon className='size-6 dark:text-white'/>Админ</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
