import React from 'react';

const BoxC = ({ cityName, time, number, backgroundColor }) => {
  return (
    <div className={`p-4 ${backgroundColor} text-white text-center`}>
      <h2 className="text-2xl font-bold mb-2">{cityName}</h2>
      <p className="text-cyan-300 mb-2">[{time}]</p>
      <div className="flex justify-center items-center mb-2">
        <span className="text-yellow-300 text-xl font-bold mr-2">[{number}]</span>
        <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded">NEW</span>
        <span className="text-yellow-300 text-xl font-bold ml-2">[-]</span>
      </div>
      <p className="text-sm">Record Chart</p>
    </div>
  );
};

export default BoxC;