import React from "react";
import { useCartSelector } from "./hooks/useSelector";

import Phone from "./Phone";
import { remove } from "./store/reducer/cartReducer";

const Cart = () => {
  const { cart } = useCartSelector();

  return (
    <div>
      {cart.map((card) => {
        return <Phone card={card} handleClick={remove} name="remove from cart"/>;
      })}
    </div>
  );
};

export default Cart;
