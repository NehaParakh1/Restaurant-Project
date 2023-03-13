import React, {useContext} from 'react';

import Modal from '../UI/Modal';
import classes from'./Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart=(props)=>{
  const cartcntx=useContext(CartContext);

  const cartItems = ( <ul className={classes['cart-items']}>
      {cartcntx.items.map((item) =>( 
      <li>Name:{item.name} price:{item.price} quantity:{item.quantity}</li>))}
      </ul>
)
    return(
      <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.700</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
    )
}
export default Cart;