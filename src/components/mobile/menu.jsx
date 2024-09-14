export function MobileMenu({openMenu, handleMenu}) {
  return (
    <div
      className={`${openMenu ? "w-full" : "invisible w-0"} absolute bottom-0 top-0 z-10 h-screen bg-blue-200 py-8 transition-all lg:invisible`}
    >
      <button
        className="absolute left-4 top-4"
        onClick={() => handleMenu(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
      </button>

      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li></li>
      </ul>
    </div>
  );
}
