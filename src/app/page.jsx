import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 5);
  // let recommendedAnime = await getNestedAnimeResponse(
  //   "recommendations/anime",
  //   "entry"
  // );
  // recommendedAnime = reproduce(recommendedAnime, 10);

  return (
    <>
      <section>
        <Header
          title="Rating Terbanyak"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  );
};

export default Page;
