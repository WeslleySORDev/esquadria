export function Header({handleMenu}) {
  return (
    <header className="sticky top-0 flex justify-between bg-white py-2">
      <div className="flex items-center space-x-4 px-4">
        <button className="" onClick={() => handleMenu(true)}>
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
        <img className="w-48" src="/assets/logo.jpg" alt="" />
      </div>
    </header>
  );
}
