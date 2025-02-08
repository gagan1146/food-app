import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" placeholder='First name' />
          <input type="text" name="" placeholder='Last name'/>
        </div>
        <input type="email" name="" placeholder='Email address' />
        <input type="text" name="" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" name="" placeholder='City' />
          <input type="text" name="" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" name="" placeholder='Zip Code' />
          <input type="text" name="" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Card Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
              <hr/>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{2}</p>
              <hr/>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount()+2}</p>
              <hr/>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
