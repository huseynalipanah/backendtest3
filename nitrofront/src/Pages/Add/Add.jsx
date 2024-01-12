import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import "./Add.scss";
const Add = () => {
  async function addDataFormik(item) {
    await fetch("http://localhost:3000/service/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(item),
    });
    await fetchData()
  }
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/service");
    const newData = await response.json();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteItem(id) {
    await fetch(`http://localhost:3000/service/${id}`, {
      method: "DELETE",
    });
    await fetchData()
  }
  return (
    <div className="service-page">
      <Helmet>
        <title>Service</title>
      </Helmet>
      <Formik
        initialValues={{ icon: "", name: "", about: "" }}
        validationSchema={Yup.object({
          icon: Yup.string().required("Required"),
          name: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          about: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          setTimeout(() => {
            addDataFormik(values);
            setSubmitting(false);
            resetForm();

          }, 400);
        }}
      >
        <Form className="form-service">
          <div className="input-section">
            <label htmlFor="icon">Icon:</label>
            <Field name="icon" type="text" className="input" />
            <ErrorMessage name="icon" />
          </div>
          <div className="input-section">
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" className="input" />
            <ErrorMessage name="name" />
          </div>
          <div className="input-section">
            <label htmlFor="about">About:</label>
            <Field name="about" type="about" className="input" />
            <ErrorMessage name="about" />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Form>
      </Formik>
      <div className="service-table">
        <table>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Card Name</th>
              <th>Card Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x._id}>
                <td>{x.icon}</td>
                <td>{x.name}</td>
                <td>{x.about}</td>
                <td className="delete-btn" onClick={() => deleteItem(x._id)}>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Add;
