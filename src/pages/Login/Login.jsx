import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Fragment } from "react";
import Erro from "./../../componatnts/Error/Erro";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginSchema from "../../Schemas/LoginSchema/LoginSchema";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { $user } from "../../componatnts/Store/Store";

export default function Login() {
  const [isAuth, setAuth] = useRecoilState($user);
  const navigate = useNavigate();
  function handelLogin(values, actions) {
    axios(
      `http://localhost:3000/users?email=${values.email}&password=${values.password}`
    ).then((data) => {
      if (data.data.length) {
        const authData = {
          isAuth: true,
          user: data.data[0],
        };
        setAuth(authData);
        localStorage.setItem("loggedInData", JSON.stringify(authData));
        toast.success("Valid Email");

        navigate("/");
      } else {
        toast.error("Password Or Email Is Not Valid");
      }
    });
    actions.resetForm();
  }

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handelLogin}
        validationSchema={LoginSchema}
      >
        {({ errors }) => {
          return (
            <Form className="auth-cont">
              <div className="Inp-group">
                <label htmlFor=""> Email:</label>
                <Field
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                ></Field>
                <Erro>{<ErrorMessage name="email" />}</Erro>
              </div>

              <div className="Inp-group">
                <label htmlFor="">Password:</label>
                <Field
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                ></Field>
                <Erro>{<ErrorMessage name="password" />}</Erro>
              </div>
              <p>
                Don't Have Account <Link to={"/Sign"}>SignUp</Link>
              </p>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={Object.keys(errors).length}
                >
                  Login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}
