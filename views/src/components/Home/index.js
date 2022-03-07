import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

export default function Home() {
  const history = useHistory();

  return (
    <div className="home">
      <div className="home-Img">
        <div className="decs-home">
          <h1>Weather Website</h1>
          <div className="btn-home">
            <button
              onClick={() => {
                history.push("/weather");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
