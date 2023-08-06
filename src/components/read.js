import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (e) => {
    console.log(e);
    axios
      .delete(`https://fakestoreapi.com/products/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>Title: {item.title}</h1>
            <span>Desctiption: {item.description}</span>
            <br />
            <img src={item.image} width="100px" />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button>
              <NavLink to={`/update/${item.id}`}>Edit</NavLink>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Read;
