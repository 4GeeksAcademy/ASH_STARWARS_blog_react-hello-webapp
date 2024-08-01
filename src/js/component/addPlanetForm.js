import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 
 export const AddPlanetForm = () => {
    const { store, actions } = useContext(Context)
  
    const formik = useFormik({
      initialValues: {
        name: '',
        diameter: '',
        atmosphere: '',
        terrain: ''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
        diameter: Yup.number()
          .positive('Must be positive')
          .required('Required'),
        terrain: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
        atmosphere: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),

      }),
      onSubmit: async values => {
        console.log(values);
        alert(JSON.stringify(values, null));
        await actions.addPlanets(values)
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
                  <label htmlFor="diameter">Diameter:</label>
                  <input
                      id="diameter"
                      name="diameter"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.diameter}
                  />
                  {formik.touched.diameter && formik.errors.diameter ? (
                      <div>{formik.errors.diameter}</div>
                  ) : null}
              </div>
              <div className="mb-3">
                  <label htmlFor="terrain">Terrain:</label>
                  <input
                      id="terrain"
                      name="terrain"
                      type="terrain"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.terrain}
                  />
                  {formik.touched.terrain && formik.errors.terrain ? (
                      <div>{formik.errors.terrain}</div>
                  ) : null}
              </div>
              <div className="mb-3">
                  <label htmlFor="atmosphere">Atmosphere:</label>
                  <input
                      id="atmosphere"
                      name="atmosphere"
                      type="atmosphere"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.atmosphere}
                  />
                  {formik.touched.atmosphere && formik.errors.atmosphere ? (
                      <div>{formik.errors.atmosphere}</div>
                  ) : null}
              </div>

              <button type="submit">Submit</button>
          </form>
      </div>
    );
  };