import logoprincipal from "../assets/logoprincipal.svg";

export function Header() {
  return (
    <header className="min-w-full min-h-11 bg-white flex justify-between items-center px-5 shadow-md">
      <img
        className="max-w-24 cursor-pointer"
        src={logoprincipal}
        alt="Logo principal"
      />
      <div className="flex gap-4">
        <a className="text-blue-700 font-semibold" href="">
          HOME
        </a>
        <a className="text-blue-700 font-semibold" href="">
          PRODUTOS
        </a>
        <a className="text-blue-700 font-semibold" href="">
          CONTATO
        </a>
      </div>
    </header>
  );
}
