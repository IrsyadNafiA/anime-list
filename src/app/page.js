import Link from "next/link";
import AnimeList from "../components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const anime = await response.json();

  return (
    <div className="p-4">
      <div className="w-full flex justify-between my-4 items-center">
        <h1 className="text-2xl font-black">Paling Populer</h1>
        <Link
          href={`/Populer`}
          className="underline hover:text-sky-400 transition-all font-semibold text-sm md:text-base"
        >
          Lihat semua
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id}>
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
