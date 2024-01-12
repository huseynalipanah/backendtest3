import React, { useEffect, useState } from "react";
import "./OurServicesCard.scss";
import { NavLink } from "react-router-dom";
const OurServicesCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/service");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="our-services-cards">
      { data.map((x) => (
        <div className="our-services-card" key={x._id}>
          <i className={x.icon}></i>
          <span>{x.name}</span>
          <p>{x.about}</p>
          <NavLink to={/detail/+x._id}><button>Learn More</button></NavLink>
        </div>
      ))}
    </div>
  );
};

export default OurServicesCard;
