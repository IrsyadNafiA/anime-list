import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col items-left gap-2 md:flex-row md:justify-between md:items-center bg-color-accent p-4">
      <Link href={`/`} className="text-3xl text-color-dark font-black">
        WIBUVERSE 👓
      </Link>
      <InputSearch />
    </header>
  );
};

export default Navbar;
