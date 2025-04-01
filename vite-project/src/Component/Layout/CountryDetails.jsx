import { useParams } from "react-router-dom"
import { getCountryIndData } from "../../api/postApi";
import { useState, useTransition } from "react";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams();

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await getCountryIndData(params.id);
                setCountry(res);

                console.log(res);


            } catch (err) {
                setError("Failed to fetch country data");
            }
        });
    }, []);

    if (isPending) return <Loader />;
    if (error) return <p className="error-message">{error}</p>;
    if (country.length === 0) return <p>No countries available.</p>;
    console.log(params);
    return (
        <h1>Hello</h1>
    )
}