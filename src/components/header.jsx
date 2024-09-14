export function Header({ openMenu, handleMenu }) {
  return (
    <header
      className={`sticky top-0 flex justify-between bg-white py-2 shadow ${openMenu ? "z-0" : "z-50"}`}
    >
      <div className="relative flex w-full items-center px-4 md:justify-between">
        <button
          className="absolute left-4 top-4 md:invisible md:hidden"
          onClick={() => handleMenu(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
        <img className="mx-auto w-44 md:mx-0 md:w-64" src="/assets/logo.jpg" alt="" />
        <ul className="invisible hidden h-full items-center justify-center gap-8 text-base font-semibold text-[#09253b] md:visible md:flex">
          <li className="hover:brightness-90">
            <a onClick={() => handleMenu(false)} href="#principios">
              Principios
            </a>
          </li>
          <li className="hover:brightness-90">
            <a onClick={() => handleMenu(false)} href="#nosso-trabalho">
              Nosso Trabalho
            </a>
          </li>
          <li className="hover:brightness-90">
            <a onClick={() => handleMenu(false)} href="#fale-conosco">
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
