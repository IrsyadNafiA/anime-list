import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`}>
      <div className="w-full h-64">
        <Image
          src={images}
          className="rounded-md"
          alt={title}
          width={350}
          height={350}
          priority
        />
      </div>
      <h3 className="font-semibold p-4 text-md md:text-lg">{title}</h3>
    </Link>
  );
};

export default AnimeList;
