import React from 'react';
import {Link} from 'react-router-dom';
import { HomeIcon, UserCircleIcon, CommandLineIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 bg-white w-full text-xs border-t-2 h-20'>
      <ul className='flex justify-between items-center h-16'>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/'><HomeIcon className='size-6 text-violet-500'/>Главная</Link></li>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/chat'><AcademicCapIcon className='size-6 text-violet-500'/>Обучение</Link></li>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/add'><CommandLineIcon className='size-6 text-violet-500'/>Собеседование</Link></li>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/profile' relative='path'><UserCircleIcon className='size-6 text-violet-500'/>Админ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
