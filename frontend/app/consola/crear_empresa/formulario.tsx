export function Form() {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-y-1">
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">Empresa</p>
          <input
            type="text"
            className="w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
            placeholder="por ejemplo, Mi empresa"
          />
        </div>
      </form>
    </div>
  );
}
