import React, { useEffect, useState } from "react";
import requestAPI from "../../apis/requestAPI";
import "./row.css";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const imageURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  let isMounted = true;
  useEffect(() => {
    const fetchData = async () => {
      const request = await requestAPI.get(fetchURL);
      if (isMounted) {
        setMovies(request.data.results);
        return request;
      }
    };

    fetchData();
    return () => {
      // eslint-disable-next-line
      isMounted = false;
    };
  }, [fetchURL]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${imageURL}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
