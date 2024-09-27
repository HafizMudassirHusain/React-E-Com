import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
    <div className="dual-ring-loader"></div>
    </div>
  );
}

export default Loader;
