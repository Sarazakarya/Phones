import React from "react";
import { $user } from "../Store/Store";
import { useRecoilState } from "recoil";

export default function LogOut() {
  const [auth, setAuth] = useRecoilState($user);
  function logOutBtn() {
    setAuth({ isAuth: false, user: null });
    localStorage.removeItem("loggedInData");
  }
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          logOutBtn();
        }}
      >
        LogOut
      </button>
    </div>
  );
}
