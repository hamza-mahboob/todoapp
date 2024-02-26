import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className={`bg-${theme === 'dark' ? 'blue-900' : 'blue-500'} text-white py-4 px-6`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">To Do App</Link>
        <nav>
          <Link to="/" className="mr-4">Tasks</Link>
          <Link to="/add" className="mr-4">Add Task</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
