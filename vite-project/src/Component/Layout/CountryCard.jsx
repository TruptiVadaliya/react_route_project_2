const CountryCard = ({ country }) => {
    return (
      <div className="country-card">
        <h2>{country.name?.common}</h2>
        <p>Official Name: {country.name?.official}</p>
      </div>
    );
  };
  
  export default CountryCard;  // ✅ Default export
  