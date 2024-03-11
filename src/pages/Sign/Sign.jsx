import React, { Fragment } from "react";
import "./Sign.scss";
import { Form, Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import registerSchema from "../../Schemas/registerSchema/registerSchema";
import Erro from "./../../componatnts/Error/Erro";
import { Link, useNavigate } from "react-router-dom";

export default function Sign() {
  const navigat = useNavigate();
  function handelregister(values, actions) {
    const newData = { ...values, cart: [] };
    delete newData.confirmpassword;
    axios.post("http://localhost:3000/users", newData).then(() => {
      console.log("email register");
    });
    navigat("/Login");
    actions.resetForm();
  }
  return (
    <Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handelregister}
      >
        {({ errors }) => {
          return (
            <Form className="auth-cont">
              <div className="Inp-group">
                <label htmlFor="">Full Name:</label>
                <Field
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                ></Field>
                <Erro>{<ErrorMessage name="name" />}</Erro>
              </div>

              <div className="Inp-group">
                <label htmlFor="">Email:</label>
                <Field type="text" placeholder="Email" name="email" />

                <Erro>{<ErrorMessage name="email" />}</Erro>
              </div>

              <div className="Inp-group">
                <label htmlFor="">Password:</label>
                <Field
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                />
                <Erro>{<ErrorMessage name="password" />}</Erro>
              </div>

              <div className="Inp-group">
                <label htmlFor="">Email:</label>
                <Field
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                />
                <Erro>{<ErrorMessage name="confirmpassword" />}</Erro>
              </div>

              <p>
                Already Have Account <Link to={"/Login"}> Login</Link>
              </p>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  disabled={Object.keys(errors).length}
                  type="submit"
                >
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}
