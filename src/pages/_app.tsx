import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  const top_links = ["Sign Up", "My Account", "History", "Quicklist (0)", "Help", "Log In"];
  const middle_links = ["Videos", "Categories", "Channels", "Community"];
  return (
    <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
      <nav className="">
        <div className="text-right text-xs pb-3">
          {
            top_links.map((e, i) => <><Link href="#" key={i}><a className="default-a">{e}</a></Link>{i < top_links.length-1 && <span className="px-1">|</span>}</>)
          }
        </div>
        <div className="pb-2 text-right space-x-3 text-sm">
          <input type="text" className="outline outline-1 outline-gray-400 w-64 p-1"></input>
          <button className="p-1 bg-gradient-to-t from-gray-300 to-gray-200 border border-gray-300">Search</button>
        </div>
        <div className="text-center flex justify-center gap-2 text-sm">
          {
            middle_links.map((e, i) => <Link href="#" key={i}><a className={`bg-gradient-to-t font-semibold to-gray-50 ${i === 0 ? "from-gray-300" : "from-indigo-200 text-indigo-900"} w-32 py-1 rounded-t-md border border-gray-300 border-b-0 flex-1 sm:flex-none`}>{e}</a></Link>)
          }
        </div>
        <div className="h-6 bg-gradient-to-b from-gray-300 to-transparent sm:rounded-lg">

        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
