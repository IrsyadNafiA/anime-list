"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const keyword = searchRef.current.value;
      if (keyword !== "") {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full md:w-fit p-2 rounded-md text-sm md:text-base font-medium border border-color-secondary"
        placeholder="Search here..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="text-gray-600 hover:text-color-dark absolute top-3 end-3 hover:scale-110"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={18} />
      </button>
    </div>
  );
};

export default InputSearch;
