'use client';

import Link from 'next/link';
import { CustomLink } from '../utils/customElements';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CloseButton, MagnificButton } from './customElemets';
import { Icon, ParrowDown } from '../utils/fragments';

const listOptions: string[] = [
  'Productos',
  'Soluciones',
  'Precios',
  'Documentación',
  'Aprender',
  'Red de socios',
  'Contabiliza Marketplace',
  'Eventos',
  'Explorar más',
];
const PrintText = () => {
  return (
    <div className="text-white flex gap-x-9 justify-between items-center cursor-pointer text-custom-gris ">
      {listOptions.map((text) => (
        <p key={text} className="whitespace-nowrap font-ember font-[500] text-custom-size3 hover:text-custom-naranja ">
          {text}
        </p>
      ))}
    </div>
  );
};

export default function Navigation() {
  const [, setCount] = useState<number>(0);
  const [Magnific, setMagnific] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleClickArrows = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const buttonName = event.currentTarget.name;
    const container = document.getElementById('printTextContainer');
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    if (!container) return;

    const id: NodeJS.Timeout = setInterval(() => {
      setIntervalId(id);
      setCount((prevCount) => {
        if (buttonName === 'startRight' && prevCount < container.clientWidth) {
          container.scrollLeft = prevCount;
          return prevCount + 1;
        }
        if (buttonName === 'startLeft' && prevCount > 0) {
          container.scrollLeft = prevCount - 400;
          return prevCount - 1;
        } else {
          clearInterval(id);
          setIntervalId(null);
          return prevCount;
        }
      });
    }, 5);
  };

  const handleClickMagnific = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setMagnific(true);
  };

  return (
    <div id="navbarInit" className="bg-custom-azul-1 w-full border-b border-gray-400">
      <div className="contenedor">
        <div className="h-[80px]">
          <div className="flex items-center justify-between">
            <div className="">
              <Link href={'/'}>
                <Icon styles="text-[34px]" />
              </Link>
            </div>
            <div className="text-white flex items-center gap-x-5 w-auto">
              <Link href={'/consola'} className="font-ember font-bold text-custom-gris text-[13px] hover:text-custom-naranja">
                Consola
              </Link>
              <ParrowDown text="Soporte" styles="font-ember font-[600] text-[13px]" />
              <ParrowDown text="Idioma" styles="font-ember font-[600] text-[13px]" />
              <ParrowDown text="Mi cuenta" styles="font-ember font-[600] text-[13px]" />
              <CustomLink href="/sign-in" className="w-[213px] hover:text-black">
                Iniciar sesión
              </CustomLink>
            </div>
          </div>
          <div className={`flex items-center ${Magnific && 'hidden'}`}>
            <ArrowLeft name="startLeft" onClick={handleClickArrows} className="block xl:hidden" />
            <div id="printTextContainer" className="overflow-x-hidden">
              <PrintText />
            </div>
            <ArrowRight name="startRight" onClick={handleClickArrows} className="block xl:hidden" />
            <MagnificButton name="" onClick={handleClickMagnific} className="xl:mx-10 mx-3" />
          </div>
          {Magnific && (
            <div className="flex items-center justify-center">
              <input type="text" placeholder="Bucar" className={`focus:outline-none w-[600px]  h-[34px]`} />
              <CloseButton name="colseIntput" onClick={() => setMagnific(false)} className="" />
            </div>
          )}
        </div>
      </div>
      <div className="bg-white flex items-center gap-x-16 px-20 h-10">
        <Link href={'/'} className="font-ember font-[600] text-[16px] text-custom-azul-2 hover:text-custom-azul-3">
          Consola de administración de Contabiliza
        </Link>
        <div className="flex gap-x-6">
          <Link href={'/'} className="font-ember font-[600] text-[13px] hover:text-custom-azul-3">
            Información general
          </Link>
          <Link href={'/'} className="font-ember font-[600] text-[13px] hover:text-custom-azul-3">
            Caracterízticas
          </Link>
          <Link href={'/'} className="font-ember font-[600] text-[13px] hover:text-custom-azul-3">
            Preguntas frecuentes
          </Link>
        </div>
      </div>
    </div>
  );
}