import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { CARD_IMG } from "../../static";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [cuponInput, setCuponInput] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    setSubtotal(subtotal);
    setTotal(subtotal);
  }, [cart]);

  const applyCupon = () => {
    const cuponCode = cuponInput.trim().toUpperCase();
    let disPercentage = 0;
    if (cuponCode === "SALE40") {
      disPercentage = 40;
      toast.success("Promokod faollashtirildi");
    } else {
      disPercentage = 0;
      toast.error("Bunday promokod mavjud emas");
    }
    const disPer = (subtotal * disPercentage) / 100;
    const disTotal = subtotal - disPer;
    setTotal(disTotal);
  };

  let items = cart?.map((el) => (
    <div className="cart-product-1" key={el.id}>
      <div className="cart-img">
        <Link to={`/product/${el.id}`}>
          <img src={CARD_IMG[el.id]?.img} alt="" />
        </Link>
        <h1>{CARD_IMG[el.id]?.title}</h1>
      </div>
      <p>${el.price}</p>
    </div>
  ));
  return (
    <div className="container">
      <div className="checkout">
        <div className="checkout-left">
          <h1>Billing Details</h1>
          <form className="checkout-form" action="">
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Street Address</label>
            <input type="text" />
            <label htmlFor="">Apartment, floor, etc. (optional)</label>
            <input type="text" />
            <label htmlFor="">Phone Number</label>
            <input type="number" />
          </form>
          <div className="checkout-checkbox">
            <input type="checkbox" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>
        <div className="checkout-right">
          {items}
          <div className="cart-total-1">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <hr />
          <div className="cart-total-1">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-total-1">
            <p>Total:</p>
            <p>${total}</p>
          </div>
          <div className="cart-cupon">
            <input
              onChange={(e) => setCuponInput(e.target.value)}
              value={cuponInput}
              type="text"
              placeholder="Coupon Code"
            />
            <button onClick={applyCupon}>Apply Coupon</button>
          </div>
          <button className="order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
