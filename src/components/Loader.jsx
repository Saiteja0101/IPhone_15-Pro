import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  return (
    <Html center>
      <div 
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-10"
      >
        {/* Spinner */}
        <div className="loader">
          <div className="spin"></div>
          <p className="text-white mt-4">Loading...</p>
        </div>
        <style>{`
          .loader {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .spin {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .text-white {
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
          }
        `}</style>
      </div>
    </Html>
  );
};

export default Loader;
