import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
  let { keyword } = params;
  keyword = keyword.replace(/%20/g, " ");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* Anime Populer */}
      <section className="p-4">
        <Header title={`Hasil pencarian "${keyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
