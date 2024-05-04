export function Icon({ styles }: { styles: string }) {
  return (
    <div>
      <h1>
        <span className={`font-ember text-white ${styles} font-[300]`}>Conta</span>
        <span className={`font-ember text-custom-naranja ${styles} font-[300]`}>Viliza</span>
      </h1>
    </div>
  );
}
