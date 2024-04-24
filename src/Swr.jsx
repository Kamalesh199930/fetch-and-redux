import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Swr = () => {
    const {
        data: countries,
        error,
        isValidating,
    } = useSWR("https://restcountries.com/v2/all", fetcher);
    // console.log(countries);
    if (error) return <div>Failed to run...</div>;
    if (isValidating) return <div>Loading..</div>;
    const firstTenPosts = countries.slice(0, 10);
    return (
        <div>
            {firstTenPosts &&
                firstTenPosts.map((country, index) => (
                    <div key={country.alpha3Code}>
                        <img
                            src={country.flags.png}
                            key={index}
                            alt="flag"
                            width={200}
                        />
                        <h1>"Capital :"{country.capital}</h1>
                        <h3> "Demonym :"{country.demonym}</h3>
                        <h3>"Native Name :"{country.nativeName}</h3>
                        {country.cioc ? <h4>"CIOC:"{country.cioc}</h4> : ""}
                        <h4> Numeric Code: {country.numericCode}</h4>
                        <h5>Population: {country.population}</h5>
                    </div>
                ))}
        </div>
    );
};
export default Swr;
