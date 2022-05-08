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
};

export default Services;
