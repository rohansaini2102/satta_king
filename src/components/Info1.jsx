import React from 'react';

const Info1 = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-b from-green-800 to-green-700 text-white p-4">
          <h2 className="text-xl font-bold text-center">👑 सबसे बेस्ट VIP आर्कीवस 👑</h2>
        </div>
        <div className="bg-gradient-to-b from-amber-50 to-white p-6">
          <p className="text-red-600 font-semibold text-center mb-4">⏰ PLAY ONLINE GAME ⏰</p>
          <ul className="space-y-1 text-sm text-center">
            {[
              "रॉयल दरबार ******01:20 PM",
              "दिल्ली बाजार ****02:45 PM",
              "श्री बाजार *******03:50 PM",
              "श्री गणेश *******04:10 PM",
              "फरीदाबाद*******05:40 PM",
              "मुंबई सिटी *******07:50 PM",
              "गाजियाबाद******08:40 PM",
              "रानी एक्सप्रेस ****09:50 PM",
              "पंजाब बुआ *******11:30 PM",
              "गाली चोर ********11:50 PM",
              "दिसावर *********04:00 AM",
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-yellow-500 mr-2">👉</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-red-600 font-semibold text-center mt-4 mb-2">(सैंट कन्फर्म जोड़ी के आंटी डोंट DS)</p>
          <div className="text-center space-y-2 mb-4">
            <p className="text-blue-600">➡ JODI 10 ⬅ <span className="text-red-600">980</span></p>
            <p className="text-blue-600">➡ HARF 100 ⬅ <span className="text-red-600">980</span></p>
          </div>
          <div className="space-y-2 text-sm text-blue-600 text-center">
            <p>➡ सुपरफास्ट रेट की गारंटी रहेगी</p>
            <p>➡ मिनिमम 2 जोड़ी ओपन रहेगी</p>
            <p>➡ जोड़ी 10₹ से हरोपु 50₹ से स्टार्ट</p>
          </div>
          <p className="mt-4 text-center text-green-600 font-semibold">✔️ Vip आर्कीवस ✔️</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-600 text-white py-2 px-4 rounded-full w-48">
          Whatsapp
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full w-48">
          📞 Call Us
        </button>
      </div>
    </div>
  );
};

export default Info1;