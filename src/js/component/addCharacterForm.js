import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 
 export const AddCharacterForm = () => {
    const { store, actions } = useContext(Context)
  
    const formik = useFormik({
      initialValues: {
        name: '',
        gender: '',
        eyeColor: '',
        age:''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
        gender: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
        eyeColor: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .trim()
          .min(1, 'Required')
          .required('Required'),
        age: Yup.number()
          .positive('Must be positive')
          .required('Required'),
      }),
      onSubmit: async values => {
        alert(JSON.stringify(values, null));
        await actions.addCharacters(values)
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
                  <label htmlFor="gender">Gender:</label>
                  <input
                      id="gender"
                      name="gender"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.gender}
                  />
                  {formik.touched.gender && formik.errors.gender ? (
                      <div>{formik.errors.gender}</div>
                  ) : null}
              </div>
              <div className="mb-3">
                  <label htmlFor="eyeColor">Eye Color:</label>
                  <input
                      id="eyeColor"
                      name="eyeColor"
                      type="eyeColor"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.eyeColor}
                  />
                  {formik.touched.eyeColor && formik.errors.eyeColor ? (
                      <div>{formik.errors.eyeColor}</div>
                  ) : null}
              </div>
              <div className="mb-3">
                  <label htmlFor="age">Age:</label>
                  <input
                      id="age"
                      name="age"
                      type="age"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.age}
                  />
                  {formik.touched.age && formik.errors.age ? (
                      <div>{formik.errors.age}</div>
                  ) : null}
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>
    );
  };