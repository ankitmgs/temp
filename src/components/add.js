import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const Add = () => {
  const initialValues = {
    title: "",
    description: "",
    price: "",
  };

  const submitForm = (value) => {
    console.log(value);

    axios
      .post("https://fakestoreapi.com/products", initialValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: initialValues,
    onSubmit: submitForm,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          placeholder="Enter title"
          value={values.title}
          onChange={handleChange}
        />
        <div>
          <input
            id="description"
            placeholder="Enter description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <select id="price" value={values.price} onChange={handleChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
