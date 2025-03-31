import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Component/UI/Loader";
import { CountryCard } from "../Component/Layout/CountryCard";


export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => (
          <CountryCard
            country={curCountry} key={index}
          />
        ))}
      </ul>
    </section>
  );
};
