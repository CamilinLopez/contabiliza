import Link from 'next/link';
import React from 'react';
import { Icon, ParrowDown } from '../utils/fracments';
import { Buttons } from './fragments';

export default function Navconsola() {
  return (
    <div className="bg-custom-azul-1 w-full">
      <div className="p-5 h-[40px] w-full flex items-center justify-between gap-x-3">
        <div className="flex md:w-9/12 xl:w-7/12 lg:w-9/12  h-full items-center gap-x-5">
          <div>
            <Link href={'/consola'}>
              <Icon styles="text-[15px]" />
            </Link>
          </div>
          <div className="border-r border-r-gray-500 h-[20px]"></div>
          <div className="cursor-pointer flex items-center gap-x-2 text-white hover:text-custom-naranja">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect y="6" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect y="12" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect x="6" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect x="6" y="6" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect x="6" y="12" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect x="12" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect x="12" y="6" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
              <rect x="12" y="12" width="4" height="4" rx="1" fill="none" className="fill-current"></rect>
            </svg>
            <p className="font-ember font-medium text-[12px]">Servicios</p>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-[30px] border-[1px] border-[#879596] bg-[#252527] focus:outline-none focus:border-custom-azul-3 text-white transition duration-300 pl-9"
              placeholder="Buscar"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-auto flex items-center gap-x-10">
          <Buttons />
          <ParrowDown text="Cuenta" styles="font-ember font-medium text-[12px]" />
        </div>
      </div>
    </div>
  );
}
