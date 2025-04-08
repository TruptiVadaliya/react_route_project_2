import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Component/UI/Loader";
import { CountryCard } from "../Component/Layout/CountryCard";
import { SearchFilter } from "../Component/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (err) {
        setError("Failed to fetch country data");
      }
    });
  }, []);

  if (isPending) return <Loader />;
  if (error) return <p className="error-message">{error}</p>;
  if (countries.length === 0) return <p>No countries available.</p>;

  // 👉 Filter logic
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.official.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = filter === "all" || country.region === filter;
    return matchesSearch && matchesRegion;
  });



  return (
    <section className="country-section">
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />

      {filteredCountries.length > 0 ? (
        <ul className="grid grid-four-cols">
          {filteredCountries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))}
        </ul>
      ) : (
        <p className="no-results">No countries match your search/filter.</p>
      )}
    </section>
  );
};
