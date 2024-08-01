import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
 export const AddShipForm = () => {
    const { store, actions } = useContext(Context)
  
    const formik = useFormik({
      initialValues: {
        name: '',
        passengers: '',
        manufacturer: ''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
        passengers: Yup.number()
          .positive('Must be positive')
          .required('Required'),
        manufacturer: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
      }),
      onSubmit: async values => {
        alert(JSON.stringify(values, null));
        await actions.addShips(values)
      },
    });
    return (
      <div className="text-center my-2 text-white">
          <form className="mx-auto" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                  ) : null}
              </div>
              <div className="mb-3">
                  <label htmlFor="passengers">Passengers:</label>
                  <input
                      id="passengers"
                      name="passengers"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.passengers}
                  />
                  {formik.touched.passengers && formik.errors.passengers ? (
                      <div>{formik.errors.passengers}</div>
                  ) : null}
              </div>
              <div className="mb-3">
                  <label htmlFor="manufacturer">Manufacturer:</label>
                  <input
                      id="manufacturer"
                      name="manufacturer"
                      type="manufacturer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.manufacturer}
                  />
                  {formik.touched.manufacturer && formik.errors.manufacturer ? (
                      <div>{formik.errors.manufacturer}</div>
                  ) : null}
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>
    );
  };