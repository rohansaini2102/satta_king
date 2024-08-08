import React from 'react'

export default function CityItem(props) {
  return (
    <div>
      
    
      <div className="flex jus w-full  p-2 text-center border-b border-gray-200">
        <div className="text-red-600 font-bold">{props.name}</div>
        <div className="text-gray-600">{props.time}</div>
        <div className="font-bold text-xl  'text-green-700'">
          {props.jodi}
        </div>
      </div>

  
    </div>
  )
}
