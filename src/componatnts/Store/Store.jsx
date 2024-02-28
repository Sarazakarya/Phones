import { atom } from "recoil";
const localAuthData = JSON.parse(localStorage.getItem("loggedInData"));
export const $user = atom({
  key: "$user",
  default: localAuthData
    ? localAuthData
    : {
        isAuth: false,
        user: null,
      },
});
