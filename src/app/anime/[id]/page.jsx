import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const genres = anime.data.genres;

  return (
    <>
      <div className="flex flex-col md:gap-3 gap-4 py-4 md:mx-4 mx-2">
        <div className="pt-4 px-2">
          <p className="text-2xl text-color-primary">
            {anime.data.title} {anime.data.year} | {anime.data.title_japanese}
          </p>
        </div>
        <div className="flex justify-start items-center p-4 gap-1 text-xl font-bold overflow-auto">
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Skor #{anime.data.score}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Peringkat #{anime.data.rank}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Episode #{anime.data.episodes}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Season #{anime.data.season}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            On Air #{anime.data.year}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Popularitas #{anime.data.popularity}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Source #{anime.data.source}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Status #{anime.data.status}
          </span>
          <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
            Type #{anime.data.type}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={300}
            className="justify-self-center rounded object-cover max-h-96"
          />
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
        <h1 className="text-xl text-color-primary text-center">
          {anime.data.duration} | {anime.data.rating}
        </h1>
        <div className="flex flex-col py-4 gap-2">
          <h2 className="text-xl text-color-primary ">
            {anime.data.broadcast.timezone}
          </h2>
          <p className="text-color-primary ">{anime.data.synopsis}</p>
          <p className="text-color-primary ">{anime.data.background}</p>
        </div>
        <div className="flex justify-start items-center font-bold text-2xl text-color-primary gap-1">
          <p>Genre:</p>
          <div className="flex justify-start items-center font-bold overflow-auto text-2xl text-color-primary gap-1">
            {genres.map((genre) => {
              return (
                <p className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent2">
                  {genre.name}s
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col py-4 gap-2">
          <a className="text-color-primary underline" href={anime.data.url}>
            official website
          </a>
        </div>
      </div>
    </>
  );
};

export default Page;
