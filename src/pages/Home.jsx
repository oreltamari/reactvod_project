import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import VodList from "../components/vodList";
import Footer from "../components/footer";

import "./Home.css";

function Home() {
  const inputRef = useRef();
  const nav = useNavigate();
  const [querys] = useSearchParams();
  const [ar, setAr] = useState([]);

  useEffect(() => {
    let searchQ = querys.get("s") || "batman";
    doApi(searchQ);
  }, [querys]);

  const onKeyboardClick = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    let input_val = inputRef.current.value;
    nav(`/?s=${input_val}`);
  };

  const doApi = async (_searchQ) => {
    if (!_searchQ) return;
    let myUrl = `https://www.omdbapi.com/?s=${_searchQ}&apikey=90781f94`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    setAr(
      data.Search
        ? Array.from(new Set(data.Search.map((a) => a.imdbID))).map((id) =>
            data.Search.find((a) => a.imdbID === id)
          )
        : []
    );
  };

  return (
    <React.Fragment>
      <Header />
      <nav className="d-flex search">
        <input
          type="search"
          className="form-control"
          ref={inputRef}
          onKeyDown={onKeyboardClick}
        />
        <button className="btn btn-warning" onClick={onSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            class="icon"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </button>
      </nav>
      <VodList vod_ar={ar} />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

