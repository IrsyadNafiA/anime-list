import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[75vh] flex flex-col justify-center items-center text-white font-black gap-4">
      <h1 className="text-center text-3xl md:text-5xl">
        404
        <br />
        Page Not Found...
      </h1>
      <Link
        href="/"
        className="bg-color-accent text-color-primary py-2 px-3 rounded-md text-base md:text-xl hover:bg-yellow-200 transition-all"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
