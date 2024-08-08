




import React, { useState, useEffect } from 'react';
import CityItem from './CityItem';


const HappyResultsScroll = (props)=> {
  // State variables
  const [cityData, setCityData] = useState([]);
//   const [error, setError] = useState(null);


//   // Fetch data when the component mounts
 

  
//   const fetchData = async ( ) => {
  
//     setError(null);

   
//     const formdata = new FormData();
//     formdata.append("username", "9672275318");
//     formdata.append("API_token", "Fb7OWv2XfhbsrhPe");
//     formdata.append("markte_name", "");
//     formdata.append("date", new Date().toISOString().split('T')[0]);

//     // Add refresh token to the request if specified
  

//     const requestOptions = {
//       method: "POST",
//       body: formdata,
     
//     };

//     try {
//       const response = await fetch("https://matkawebhook.matka-api.online/market-data-delhi", requestOptions);
//       const result = await response.json();
//         setCityData(result.today_result);
   

//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Failed to fetch data. Please try again.');
    
//     }
  
//   };
  useEffect(() => {
    console.log("i am in happy result");

     setCityData(props.result)
    
  }, []);


  

  // Render loading state

  // Render error state
 

  // Main render
  return (
    <>
    <div className="w-full bg-gradient-to-b from-white to-pink-100 shadow-lg overflow-hidden">
      <div className="bg-yellow-400 text-center py-2 font-bold text-blue-800">
        HAPPY KING | HAPPY RESULT | HAPPY CHART
      </div>
      <div className="text-center py-2 text-blue-800">
        09-02-2024
        <br />
        Happy King Live Result Today
      </div>
      
      <div className="flex">
    

        {/* All Cities Section */}
        <div className="h-96 overflow-y-auto">
          <h2 className="text-center font-bold py-2">All Cities</h2>
           
         
          {cityData.map((item, index) => (
                <CityItem key={index} jodi={item.jodi} name={item.market_name} time={item.aankdo_date} />
            ))}

        </div>

      </div>
      
     
    </div>
          </>
  );
};

export default HappyResultsScroll;