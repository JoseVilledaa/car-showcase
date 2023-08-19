import Image from "next/image";
import { Hero } from "../components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { CustomFilter } from "@/components/CustomFilter";
import { fetchApiCars } from "@/utils/apiCars";
import { CarCard } from "@/components/CarCard";

export default async function Home() {
  const allCars = await fetchApiCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font font-extrabold"> Car Catalogue</h1>
          <p> Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="fuel" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">no hay carros jefe</h2>
            <p>{allCars}</p>
          </div>
        )}
      </div>
    </main>
  );
}
