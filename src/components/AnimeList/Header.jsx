import Link from "next/link";

const Header = ({ linkHref, linkTitle, title }) => {
  return (
    <div className="w-full flex justify-between my-4 items-center">
      <h1 className="text-2xl font-black">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="underline hover:text-sky-400 transition-all font-semibold text-sm md:text-base"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
