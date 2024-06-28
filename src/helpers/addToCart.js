import SummaryApi from "../common";
import { toast } from "react-toastify";

const addToCart = async (e, id, userId) => {
  e?.stopPropagation();
  e?.preventDefault();
console.log(userId)
  const response = await fetch(SummaryApi.addToCartProduct.url, {
    method: SummaryApi.addToCartProduct.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ productId: id, userId: userId }),
  });

  const responseData = await response.json();

  if (responseData.success) {
    toast.success(responseData.message);
  }

  if (responseData.error) {
    toast.error(responseData.message);
  }

  return responseData;
};

export default addToCart;
