import React from "react";
import VodItem from "./vodItem";

function VodList({ vod_ar }) {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2>List of movies: </h2>
        <div className="row">
          {vod_ar?.map((item) => <VodItem key={item.imdbID} item={item} />) || (
            <p>No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VodList;
