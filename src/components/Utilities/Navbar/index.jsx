import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col items-left gap-2 md:flex-row md:justify-between md:items-center bg-sky-400 p-4">
      <Link href={`/`} className="text-2xl text-white font-bold">
        WIBUVERSE 👓
      </Link>
      <div className="relative">
        <input
          type="text"
          className="w-full md:w-fit p-2 rounded-md text-sm md:text-base font-medium border border-black border-color-secondary"
          placeholder="Search here..."
        />
        <button
          type="button"
          className="text-gray-600 hover:text-color-dark absolute top-3 end-3 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
