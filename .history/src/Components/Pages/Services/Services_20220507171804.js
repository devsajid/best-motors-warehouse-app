import React from "react";
import { useState, useEffect } from "react";
import Service from "../../Home/Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (p
    <div>
      <h1 className="services-title">Our services</h1>
      <div className="services-container container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
