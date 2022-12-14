import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-lg font-bold my-1">Video Title</h1>
        <div className="flex gap-3">
          <div className="flex-1 space-y-2 text-sm">
            <div className="bg-black pt-[56.25%] w-full">Video Placeholder</div>
            <div className="bg-gray-200 border border-gray-300 text-xs">
              <div className="flex items-center">
                <div className="text-center flex-1 p-1">
                  Rate this video: <br />
                  <span className="text-lg text-rose-600">★ ★ ★ ★ ★</span><br />
                  424 ratings
                </div>
                <div className="flex-1">
                  Save to Favorites <br />
                  Save to Groups
                </div>
                <div className="flex-1">
                  Share Video <br />
                  Post Video
                </div>
                <div className="flex-1">
                  Flag as <br />
                  Inappropriate
                </div>
              </div>
              <div className="flex border-t-[1px] border-gray-300 text-center p-1">
                <div className="flex-1 border-r-2 border-gray-300">Views: 51,295</div>
                <div className="flex-1 border-r-2 border-gray-300">Comments: 188</div>
                <div className="flex-1 border-r-2 border-gray-300">Favorited: 188</div>
                <div className="flex-1">more stats...</div>
              </div>
            </div>
          </div>
          <div className="w-72 border border-gray-300 text-xs p-1 max-h-min">
            <button className="float-right px-3 border-2 border-orange-500 bg-gradient-to-tr from-orange-500 via-orange-500 to-orange-50 rounded text-white font-extrabold">Subscribe</button>
            <span className="font-semibold">Added</span> <span className="font-bold">April 23, 2005</span><br />
            <span className="font-semibold">From</span> <Link href="#"><a className="default-a">Creator</a></Link>
            <div className="h-28">Image Placeholder</div>
            <div>Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder Description Placeholder</div>
            <span className="font-semibold">Category</span> <Link href="#"><a className="default-a">Vtuber</a></Link><br />
            <span className="font-semibold">Tags</span> <Link href="#"><a className="default-a">Vtuber</a></Link><br />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
