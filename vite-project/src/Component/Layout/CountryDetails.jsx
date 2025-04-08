import { useEffect, useState, useTransition } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState({});

    useEffect(() => {
        startTransition(() => {
            getCountryIndData(params.id).then((res) => {
                if (res.status === 200) {
                    setCountry(res.data[0]);
                }
            });
        });
    }, [params.id]);

    if (isPending || !country.name) return <Loader />;

    return (
        <section className="country-section">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

            <div className="country-container">
                {
                    country && (
                        <>
                            <div className="flag-box">
                                {country?.flags?.svg && (
                                    <img
                                        src={country.flags.svg}
                                        alt={country.flags.alt || "Country flag"}
                                        className="country-flag"
                                    />
                                )}
                            </div>

                            <div className="details-box">
                                <h2 className="country-name">{country?.name?.official}</h2>
                                <div className="info-list">
                                    <p><span className="info-label">Native Names:</span>
                                        {Object.keys(country.name?.nativeName || {})
                                            .map((key) => country.name.nativeName[key].common)
                                            .join(", ")}
                                    </p>
                                    <p><span className="info-label">Population:</span>
                                        {country.population?.toLocaleString()}
                                    </p>
                                    <p><span className="info-label">Region:</span>
                                        {country.region}
                                    </p>
                                    <p><span className="info-label">Sub Region:</span>
                                        {country.subregion}
                                    </p>
                                    <p><span className="info-label">Capital:</span>
                                        {country.capital?.join(", ")}
                                    </p>
                                    <p><span className="info-label">Top Level Domain:</span>
                                        {country.tld?.[0]}
                                    </p>
                                    <p><span className="info-label">Currencies:</span>
                                        {Object.keys(country.currencies || {})
                                            .map((curElem) => country.currencies[curElem].name)
                                            .join(", ")}
                                    </p>
                                    <p><span className="info-label">Languages:</span>
                                        {Object.keys(country.languages || {})
                                            .map((curElem) => country.languages[curElem])
                                            .join(", ")}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) 
                }
            </div>
        </section>
    );
};
