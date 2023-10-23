import { useSelector } from "react-redux";

export const useCartSelector = () => useSelector((state) => state.cartReducer);
