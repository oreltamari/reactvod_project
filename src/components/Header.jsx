import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="container-fluid bg-dark text-white py-3">
      <div className="container d-flex">
        <div className="logo col-auto">
          <h3>
            React <span>VOD</span>
          </h3>
        </div>
      </div>
    </header>
  );
}
