

import React from "react";
import "./index.css";
import BoxAB from "./components/BoxAB";
import BoxC from "./components/BoxC";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2"
import Info4 from "./components/Info4"

const SattaKing = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-col items-center bg-white w-screen">
         <div className="flex w-full justify-evenly mb-4">
        <div className="bg-teal-700 text-white py-2 px-4 rounded-full w-96 flex justify-center">
          Desawar
        </div>
        <div className="bg-purple-700 text-white py-2 px-4 rounded-full w-96 flex justify-center">
          Gali
        </div>
        <div className="bg-red-600 text-white py-2 px-4 rounded-full w-96 flex justify-center">
          Faridabad
        </div>
        </div>

        <div className="bg-green-700 text-white py-2 px-4 w-full text-center text-sm mb-4">
        Satta result, Satta king result, Satta king online, Mirzapur Satta, Gali
        result, Desawar result, Satta king chart, Mirzapur Satta Chart, Satta
        king live, Gali Satta, Deshawar live result, Gali live result, Satta
        matka,
       </div>

       <h1 className="text-4xl font-bold text-blue-700 mb-4">Satta KING</h1>

        <div className="bg-pink-100 border border-red-300 rounded p-4 w-full mb-4 custom-rounded border-t-3 border-b-3 border-t-[#cc0602] border-b-[#cc0602] border-r-0 border-l-0">
        <h2 className="text-red-600 text-center font-bold">Official Satta</h2>
        <h2 className="text-red-600 text-center font-bold">
          Official Satta Result
        </h2>
        <h2 className="text-center">
          <span className="text-red-600 font-bold">Satta King</span>
          <span className="text-blue-700 font-bold"> Result</span>
        </h2>

        <p className="text-center text-xs mt-2">
          SattaKING, Satta KING GALI, MIRZAPUR Satta, GHAZIABAD Satta, Satta
          KING FAST, Satta, FARIDABAD Satta RESULT, MIRZAPUR Satta KING, Satta
          FAST, SUPER Satta LIVE, Satta 786, Satta BATTA, DESAWAR Satta.
        </p>

        <div className="pt-8 text-center font-bold text-green-800">
          OFFICIALSattaRESULT.COM
        </div>
      </div>

      <div className="bg-yellow-300 w-full h-10">
        <p className="p-2 text-center">
          SATTA KING | SATTA RESULT | SATTA CHART
        </p>
      </div>
      </div>
      

      {/* New components added here */}
      <div className="w-full mt-4 mx-10">
        <BoxAB 
          cityNameA="DESAWAR" 
          timeA="05:15 AM" 
          numberA="43"
          cityNameB="NILAM BAZAR" 
          timeB="12:45 PM" 
          numberB="67"
          backgroundColor="bg-red-900"
        />
      </div>

      <div className="w-full mt-1 ml-10 mx-10">
        <BoxAB 
          cityNameA="GOLDEN CITY" 
          timeA="01:10 PM" 
          numberA="55"
          cityNameB="NAGPUR SATTA" 
          timeB="03:45 PM" 
          numberB="67"
          backgroundColor="bg-blue-900"
        />
      </div>

      <div className="w-full mt-1 ml-10">
        <BoxC 
          cityName="GANESH DARBAR" 
          time="07:20 PM" 
          number="69" 
          backgroundColor="bg-green-900"
        />
      </div>

      <div className="w-full mt-1 ml-10">
        <BoxC 
          cityName="ROYAL DARBAR" 
          time="01:30 PM" 
          number="53" 
          backgroundColor="bg-green-900"
        />
      </div>

      <div className="flex justify-between w-full mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Chat</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Refresh</button>
      </div>

       {/* the new Info1 component here */}
       <Info1 />
       <Info2 />
       <Info4  />

    </div>
  );
};

export default SattaKing;