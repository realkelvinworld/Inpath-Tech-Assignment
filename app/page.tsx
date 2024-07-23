import SearchBar from "../app/components/SearchBar"; // Corrected spelling
import SelectTile from "./components/SelectTile";

export default function Home() {
  return (
    <main className="herobg1 h-[100vh] flex  justify-center px-6">
      <section className=" flex flex-col items-start lg:mt-44 mt-28">
        <div className="">
          <h1 className="lg:font-black font-bold lg:text-6xl text-5xl">
            Discover a greater you.
          </h1>
          <p className="font-bold lg:text-4xl text-3xl mt-3">
            We help you{" "}
            <span className="text-green-700 dark:text-green-500">
              find the perfect job
            </span>{" "}
          </p>
        </div>
        <div className="py-6">
          <SearchBar />
          {/* <SelectTile /> */}
        </div>
      </section>
    </main>
  );
}
