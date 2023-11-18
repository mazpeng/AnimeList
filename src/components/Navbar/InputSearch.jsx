"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;
    router.push(`/search/${keyword}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime"
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button className="absolute top-2 end-3" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
