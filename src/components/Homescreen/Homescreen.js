import React from "react";
import requests from "../../apis/requestEndPoint";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
const Homescreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={requests.fetchNetflixOriginl}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentraies} />
    </div>
  );
};

export default Homescreen;
