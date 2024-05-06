'use client';

import React, { useState } from 'react';

export default function Bar() {
  const [expande, useExpande] = useState<boolean>(false);

  return (
    <div
      className={`bg-white hover:bg-slate-100 w-[40px] ${
        expande ? 'w-[200px] transition-all duration-500 ease-in-out' : 'w-[40px]'
      } h-screen border-r-[1px] border-gray-300`}>
      <div className="flex items-center justify-center ">
        <button className="p-3 text-custom-azul-1" onClick={() => useExpande(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
