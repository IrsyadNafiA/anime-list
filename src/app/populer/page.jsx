import AnimeList from "@/components/AnimeList";

const Populer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-black my-4">Paling Populer</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id}>
              <AnimeList
                images={data.images.webp.image_url}
                title={data.title}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Populer;
