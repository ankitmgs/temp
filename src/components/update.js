import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const id = useParams();
  console.log(id.id);
  const [savedValues, setsavedValues] = useState();

  const initialValues = {
    title: savedValues?.title,
    description: savedValues?.description,
    price: savedValues?.price,
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id.id}`)
      .then((res) => {
        console.log(res);
        setsavedValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = () => {
    
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: updateData,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          placeholder="title"
          value={savedValues?.title}
          onChange={handleChange}
          style={{ width: "40%" }}
        />
        <div>
          <textarea
            id="description"
            placeholder="description"
            style={{ width: "90%", height: " 100px" }}
            onChange={handleChange}
            value={savedValues?.description}
          />
        </div>
        <div>
          <input
            id="price"
            placeholder="price"
            value={savedValues?.price}
            onChange={handleChange}
            style={{ width: "40%" }}
          />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
