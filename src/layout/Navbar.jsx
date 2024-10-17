import React from 'react';
import {Link} from 'react-router-dom';
import { HomeIcon, ChatBubbleBottomCenterTextIcon, FolderPlusIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 bg-white w-full text-xs border-t-2 h-20'>
      <ul className='flex justify-between items-center h-16'>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/'><HomeIcon className='size-6 text-violet-500'/>Home</Link></li>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/chat'><ChatBubbleBottomCenterTextIcon className='size-6 text-violet-500'/>ChatGPT</Link></li>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/add'><FolderPlusIcon className='size-6 text-violet-500'/>Add Quest</Link></li>
        <li><Link className='flex flex-col gap-1 items-center w-20' to='/profile' relative='path'><UserCircleIcon className='size-6 text-violet-500'/>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
