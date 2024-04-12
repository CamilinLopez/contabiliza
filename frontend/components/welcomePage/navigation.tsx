"use client";

import Link from "next/link";
import { CustomLink } from "../utils/customElements";

const listOptions: string[] = [
  "re:Invent",
  "Productos",
  "Soluciones",
  "Precios",
  "Documentación",
  "Aprender",
  "Red de socios",
  "Contaviliza Marketplace",
  "Eventos",
  "Explorar más",
];
const PrintText = () => {
  return (
    <div className="flex justify-between items-center cursor-pointer text-custom-gris bg-red-900">
      {listOptions.map((text) => (
        <p
          key={text}
          className="font-ember font-[500] text-custom-size3 hover:text-custom-naranja"
        >
          {text}
        </p>
      ))}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3.0}
        stroke="currentColor"
        className="w-5 h-5 hover:text-custom-naranja "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

const ParrowDown = ({ text }: { text: string }) => (
  <div className="flex items-center gap-x-[2px] text-custom-gris hover:text-custom-naranja cursor-pointer">
    <p className="font-ember font-[600] text-[13px]">{text}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 h-3 text-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
);

export default function Navigation() {
  return (
    <div className="bg-white w-full flex flex-col border-b border-gray-400">
      <div className="bg-custom-azul-1 px-[40px] py-[13px] w-full">
        <div className="flex items-center justify-between">
          <h1>
            <span className="font-ember text-white font-[300] text-[34px]">
              Conta
            </span>
            <span className="font-ember text-custom-naranja font-[300] text-[34px]">
              Viliza
            </span>
          </h1>
          <div className="flex gap-x-5 items-center">
            <Link
              href={"/"}
              className="font-ember font-[600] text-custom-gris text-[13px] hover:text-custom-naranja"
            >
              Contacte con nosotros
            </Link>
            <ParrowDown text="Soporte" />
            <ParrowDown text="Idioma" />
            <ParrowDown text="Mi cuenta" />
            <CustomLink href="/">Inicie sesión en la consola</CustomLink>
          </div>
        </div>
        <div className="lg:overflow-visible overflow-x-auto py-[5px] w-full ">
          <PrintText />
        </div>
      </div>
      <div className="h-[40px] flex gap-x-16 items-center px-16">
        <Link
          href={"/"}
          className="font-ember font-[600] text-[16px] text-custom-azul-2 hover:text-custom-azul-3"
        >
          Consola de administración de ContaViliza
        </Link>
        <div className="flex gap-x-6">
          <Link
            href={"/"}
            className="font-ember font-[600] text-[13px] hover:text-custom-azul-3"
          >
            Información general
          </Link>
          <Link
            href={"/"}
            className="font-ember font-[600] text-[13px] hover:text-custom-azul-3"
          >
            Caracterízticas
          </Link>
          <Link
            href={"/"}
            className="font-ember font-[600] text-[13px] hover:text-custom-azul-3"
          >
            Preguntas frecuentes
          </Link>
        </div>
      </div>
    </div>
  );
}
