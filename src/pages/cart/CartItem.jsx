import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

function CartItem(props) {
    const {id, productName, price, productImage} = props.data;
    const {CartItems, addToCart, removeFromCart} = useContext(ShopContext)

  return (
    <div className="cartItem">
        <img src={productImage} alt={productName} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={CartItems[id]} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem