import React from 'react';
import BoxC from './BoxC';

const BoxAB = ({ cityNameA, timeA, numberA, cityNameB, timeB, numberB, backgroundColor }) => {
  return (
    // <div className="grid grid-cols-2 gap-1">
    //   <div className={`p-4 ${backgroundColor} text-white`}>
    //     <h2 className="text-2xl font-bold mb-2">{cityNameA}</h2>
    //     <p className="text-cyan-300 mb-2">[{timeA}]</p>
    //     <div className="flex items-center mb-2">
    //       <span className="text-yellow-300 text-xl font-bold mr-2">[{numberA}]</span>
    //       <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded">NEW</span>
    //       <span className="text-yellow-300 text-xl font-bold ml-2">[-]</span>
    //     </div>
    //     <p className="text-sm">Record Chart</p>
    //   </div>
    //   <div className={`p-4 ${backgroundColor} text-white`}>
    //     <h2 className="text-2xl font-bold mb-2">{cityNameB}</h2>
    //     <p className="text-cyan-300 mb-2">[{timeB}]</p>
    //     <div className="flex items-center mb-2">
    //       <span className="text-yellow-300 text-xl font-bold mr-2">[{numberB}]</span>
    //       <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded">NEW</span>
    //       <span className="text-yellow-300 text-xl font-bold ml-2">[-]</span>
    //     </div>
    //     <p className="text-sm">Record Chart</p>
    //   </div>
    // </div>
    <>
    <div className="grid grid-cols-2 gap-1">

    <BoxC/>
    <BoxC/>
    </div>
    </>
  );
};

export default BoxAB;