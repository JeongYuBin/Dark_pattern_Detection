import React from 'react';

const SetPage = ({ onClose, onConfirm }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white bg-opacity-0 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 text-center max-w-sm w-full shadow-2xl">
        <h2 className="text-lg font-bold mb-2 text-red-600">1,900원만 추가하면</h2>
        <p className="font-semibold text-gray-800 mb-1">계란후라이와 음료를 드실 수 있어요!</p>
        <p className="text-sm text-gray-500 mb-4">세트로 변경할까요?</p>
        <div className="flex justify-center mb-4">
          <img src="/set.jpg" alt="세트 구성" className="w-40 h-24 object-cover rounded" />
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2 rounded hover:bg-gray-100"
          >
            아니요
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600"
          >
            네, 추가할게요
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPage;