import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  // console.log(api);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {api.data.map((data) => {
        return (
          <div key={data.mal_id}>
            <Link href={`/${data.mal_id}`}>
              <div className="w-full h-64">
                <Image
                  src={data.images.webp.image_url}
                  className="rounded-md"
                  alt={data.title}
                  width={350}
                  height={350}
                  priority
                />
              </div>
              <h3 className="font-semibold p-4 text-md md:text-lg">
                {data.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
