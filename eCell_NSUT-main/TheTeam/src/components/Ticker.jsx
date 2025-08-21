import React from 'react';

const Ticker = () => {
  const tickerContent = (
    <>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-gray-400 mx-8">E-Summit's Time</span>
    </>
  );

  return (
    <div className="bg-gray-900 border-y border-gray-700 w-full py-3 overflow-hidden">
      <div className="flex animate-scroll">
        <div className="flex items-center flex-shrink-0">{tickerContent}</div>
        <div className="flex items-center flex-shrink-0">{tickerContent}</div>
      </div>
    </div>
  );
};

export default Ticker;