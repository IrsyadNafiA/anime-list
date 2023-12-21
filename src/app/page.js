import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

  return (
    <>
      {/* Anime Populer */}
      <section className="p-4">
        <Header
          linkTitle={"Lihat semua"}
          linkHref={`/populer`}
          title={"Anime Populer"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
