import Link from "next/link";
import InputSearch from "./InputSearch";
const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4">
        <Link href="/" className="flex justify-center font-bold text-2xl">
          CuyAnime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
