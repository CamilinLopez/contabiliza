'use client';

import React, { useState } from 'react';

export default function Bar() {
  const [expande, setExpande] = useState<boolean>(false);
  const [showDiv, setShowDiv] = useState<boolean>(false);

  const open = () => {
    setExpande(!expande);
    const timer = setTimeout(() => {
      setShowDiv(!showDiv);
    }, 500);

    return () => clearTimeout(timer);
  };

  return (
    <div
      className={`bg-white ${
        expande ? 'w-[250px] transition-all duration-500 ease-in-out' : 'w-[40px] hover:bg-slate-100'
      } h-screen border-r-[2px] border-gray-300`}>
      <div className="w-full">
        {!expande ? (
          <div className="flex justify-center p-3">
            <button onClick={() => open()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="py-4 px-4 w-full h-[84px] border-b-[1px] border-gray-300">
            {showDiv && (
              <div className="flex items-start justify-between">
                <h1 className="font-ember font-bold text-[18px] text-custom-negro">
                  Página de inicio de <br /> la Consola
                </h1>
                <button className="text-slate-500 hover:text-slate-600" onClick={() => open()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
