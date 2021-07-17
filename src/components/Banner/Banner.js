import React, { useEffect, useState } from "react";
import requestAPI from "../../apis/requestAPI";
import requests from "../../apis/requestEndPoint";
import "./banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await requestAPI.get(requests.fetchNetflixOriginl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  //   console.log(movie);
  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="button__banner">Play</button>
          <button className="button__banner">MyList</button>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
