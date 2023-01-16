import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dogs = () => {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const url = "/api/v1/dogs/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setDogs(res));
      // .catch(() => navigate("/"));
  }, []);

  const allDogs = dogs.map((dog, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <p>{dog.breeds[0].name} are Bred for {dog.breeds[0].bred_for}</p>
        <img
          src={dog.url}
          className="card-img-top"
          alt={`${dog.id} image`}
        />
        <p>{dog.breeds[0].temperament}</p>
        <Link to={`/dog/${dog.id}`} className="btn custom-button">
            View Dog
          </Link>
      </div>
    </div>
  ));





  return (
    <>
      <div className="py-5">
        Dogs go here
      </div>
      <div>
        {allDogs}
      </div>
    </>
  );
};

export default Dogs;
