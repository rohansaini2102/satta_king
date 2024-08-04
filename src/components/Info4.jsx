import React from 'react';

const Info4 = () => {
  return (
    <div className="bg-white border border-blue-500 rounded-lg shadow-lg p-4 m-4 w-full">
      <div className="bg-gradient-to-b from-teal-800 to-white p-4 rounded-t-lg">
        <div className="text-center text-white font-bold">📌 सबसे तेसर श्री खाईवाल 📌</div>
      </div>
      <div className="p-4 text-center">
        <div className="text-red-700 font-bold">✴️ PLAY ONLINE GAME ✴️</div>
        <div className="mt-4 space-y-2 text-left inline-block">
          <div>➡️ नैथा सिटी..........02:00 PM*</div>
          <div>➡️ दिल्ली बाजार..........03:05 PM*</div>
          <div>➡️ कृष्णा बाजार..........04:10 PM*</div>
          <div>➡️ श्री गणेश..........04:30 PM*</div>
          <div>➡️ फरीदाबाद..........05:50 PM*</div>
          <div>➡️ कश्मीरी नाईट..........08:10 PM*</div>
          <div>➡️ गाजियाबाद..........09:00 PM*</div>
          <div>➡️ गली चोर..........11:30 PM*</div>
          <div>➡️ दिसावर..........04:00 AM*</div>
          <div className="text-center">(पेंडेट करके छोड़ दे ऑटो ओके DS)</div>
        </div>
        <div className="mt-4 text-center">
          <div className="text-red-600 font-bold">GAME PASSING RATE</div>
          <div>➡️ JODI 10 के 980₹</div>
          <div>➡️ HARF 100 के 980₹</div>
        </div>
        <div className="mt-4 text-center space-y-2">
          <div className="text-blue-600">➡️ SUPER FASTPAYMENT.🎉</div>
          <div className="text-blue-600">➡️ 24..HOURS AVAILABLE.🎉</div>
        </div>
      </div>
      <div className="flex justify-around p-4 bg-gradient-to-t from-blue-200 to-blue-500 rounded-b-lg">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">📞 Call Us</button>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Whatsapp</button>
      </div>
    </div>
  );
};

export default Info4;
