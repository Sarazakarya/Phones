import React from "react";
import { useRecoilState } from "recoil";
import { $user } from "../Store/Store";
import { Navigate } from "react-router-dom";

export default function IsNotLogin({ children }) {
  const [auth] = useRecoilState($user);
  if (auth.isAuth) return <Navigate to={"/"} />;
  return <div>{children}</div>;
}
