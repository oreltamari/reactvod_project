import React from "react";
import { useNavigate } from "react-router-dom";
import "./vodItem.css";

function VodItem({ item }) {
  const nav = useNavigate();
  const onInfoClick = () => {
    nav(`/info/${item.imdbID}`);
  };

  return (
    <div className="col-md-3 p-2">
      <div className="vod-card d-flex flex-column h-100">
        <div className="poster-wrapper">
          <img
            src={item.Poster !== "N/A" ? item.Poster : "/placeholder.jpg"}
            alt={item.Title}
            className="poster-img"
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between flex-grow-1 text-center">
          <div>
            <h3>{item.Title}</h3>
            <div className="year">Year: {item.Year}</div>
          </div>
          <button className="mt-auto btn-more-info" onClick={onInfoClick}>
            More Info
          </button>
        </div>
      </div>
    </div>
