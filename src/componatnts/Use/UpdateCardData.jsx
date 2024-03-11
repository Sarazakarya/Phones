import axios from "axios";

export default function UpdateCardData(cart, userId) {
  axios.patch(`http://localhost:3000/users/${userId}`, { cart });
}
