import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col items-left gap-2 md:flex-row md:justify-between md:items-center bg-sky-400 p-4">
      <Link href={`/`} className="text-2xl text-white font-bold">
        WIBUVERSE 👓
      </Link>
      <InputSearch />
    </header>
  );
};

export default Navbar;
