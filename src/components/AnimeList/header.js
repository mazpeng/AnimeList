import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl">{title}r</h1>
      <Link
        href={linkHref}
        className="text-xl underline hover:text-indigo-500 transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};
export default Header;
