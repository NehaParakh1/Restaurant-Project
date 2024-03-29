import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const CartList = (props) => {
  const cxt = useContext(CartContext);

  return (
    <li key={props.id} className={classes['cart-list']}>
      <h3>{props.name}</h3>
      <div className={classes.price}><h4> Rs.{props.price}</h4></div>
      <div className={classes.quantity}>
      Qty:{props.quantity} <button onClick={() => cxt.quantityplus(props)}>Add</button>
      <button onClick={() => cxt.quantityminus(props)}>remove</button>
        
      </div>
      <div></div>
    </li>
  );
};

export default CartList;