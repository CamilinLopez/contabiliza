'use client';

import React, { useState } from 'react';
import { ResumenMenu } from './fracments';

export default function Resumen() {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div className="w-auto h-auto shadow-thin-black">
      <div className="border-b-[1px] border-slate-300 bg-custom-blanco-2">
        <div className="h-[65px] w-auto flex items-center p-5 gap-x-3">
          {hidden ? (
            <button onClick={() => setHidden(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setHidden(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          )}

          <h2 className="font-ember font-semibold text-[18px] text-custom-negro-2">Resumen</h2>
        </div>
      </div>
      <div className={`bg-white p-5 w-full ${hidden && 'hidden'} `}>
        <ResumenMenu />
      </div>
    </div>
  );
}
