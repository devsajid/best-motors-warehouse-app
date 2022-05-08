import React from "react";
import Item from ".historysrcComponentsItemsItems_20220507171649";

const Items = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="services-title">Our services</h1>
      <div className="services-container container">
        {services.map((service) => (
          <Item key={service.id} service={service}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
