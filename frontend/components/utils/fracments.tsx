export function Icon({ styles }: { styles: string }) {
  return (
    <div>
      <h1>
        <span className={`font-ember text-white ${styles} font-[300]`}>Conta</span>
        <span className={`font-ember text-custom-naranja ${styles} font-[300]`}>Biliza</span>
      </h1>
    </div>
  );
}

export const ParrowDown = ({ text, styles }: { text: string; styles: string }) => (
  <div className="flex items-center gap-x-[2px] text-custom-gris-1 hover:text-custom-naranja cursor-pointer">
    <p className={`${styles}`}>{text}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 h-3 text-current">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </div>
);
