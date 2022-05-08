import React from "react";
import { useState, useEffect } from "react";
import Service from "../../Home/Service/Service";
import "./Services.css";

const Services = () => {
  return (
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
