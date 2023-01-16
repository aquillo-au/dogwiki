import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const Dog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [dog, setDog] = useState({ url: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setDog(response))
      // .catch(() => navigate("/recipes"));
  }, [params.id]);

  let breedInfo = []
  breedInfo = dog.breeds


  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={dog.url}
          className="card-img-top"
          alt={`${dog.id} image`}
        />
        <p>{dog['breeds'][0]['weight']['imperial']}</p>
      </div>
    </div>
  );
};

export default Dog;
