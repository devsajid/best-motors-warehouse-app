import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();
  const [Iteme, setIteme] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/Warehouse-item/${id}`;
    // const url = `https://api.spotify.com/v1/albums/${id}`;
    // const url = `http://localhost:3000/ItemDetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setIteme(data));
  }, [id]);

  return (
    <div>
      <div>ItemDetails page</div>
      <h2>item : {Iteme.id}</h2>
    </div>
  );
}

export default ItemDetails;
