import SearchBar from "../app/components/SearchBar"; // Corrected spelling

export default function Home() {
  return (
    <main className="herobg1 h-[100vh] flex  justify-center px-6">
      <section className=" flex flex-col items-start mt-56">
        <div className="flex flex-col items-start">
          <h1 className="font-black text-6xl">Discover a greater you.</h1>
          <p className="font-bold text-4xl mt-4">
            We help you{" "}
            <span className="text-green-700 dark:text-green-500">
              find the perfect job
            </span>{" "}
          </p>
        </div>
        <SearchBar />
      </section>
    </main>
  );
}
