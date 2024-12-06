import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../components/ThemeToggleButton';


const Profile = ({ setAdmin }) => {

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-2xl dark:bg-slate-800 dark:text-white">
      <ThemeToggleButton/>
      <Link className='w-80 h-12 flex justify-center items-center dark:bg-slate-600 bg-blue-100 rounded-xl text-red-500' to="/auth" onClick={() => setAdmin(0)}>
        Выйти
      </Link>
    </div>
  );
};

export default Profile;
