import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Dog Wiki</h1>
        <p className="lead">
          Lots of Dogs
        </p>
        <hr className="my-4" />
        <Link
          to="/dogs"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Doggo's
        </Link>
      </div>
    </div>
  </div>
);
