import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import { CARD_IMG } from "../../static";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  clearCart,
  decCart,
  incCart,
  removeFromCart,
} from "../../context/cartSlice";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = () => {
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

  const clearCartAll = () => {
    dispatch(clearCart());
    toast.warning("Barcha mahsulotlar ochirildi");
  };

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
    <div className="cart-product" key={el.id}>
      <div className="cart-img">
        <Link to={`/product/${el.id}`}>
          <img src={CARD_IMG[el.id]?.img} alt="" />
        </Link>
        <h1>{CARD_IMG[el.id]?.title}</h1>
      </div>
      <p>${el.price}</p>
      <div className="cart-btn">
        <div className="cart-btn-1">
          <span>{el.quantity}</span>
          <div className="cart-inc-dec">
            <button onClick={() => dispatch(incCart(el))}>
              <FaAngleUp />
            </button>
            <button
              disabled={el.quantity === 1}
              onClick={() => dispatch(decCart(el))}
            >
              <FaAngleDown />
            </button>
          </div>
        </div>
      </div>
      <p>${el.price * el.quantity}</p>
      <button
        onClick={() => dispatch(removeFromCart(el))}
        className="delete-one-cart"
      >
        <MdDelete />
      </button>
    </div>
  ));

  return (
    <div className="container">
      {cart.length ? (
        <div className="cart">
          <div className="cart-top">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {items}
          <div className="cart-delete-btn">
            <Link to={"/"}>
              <button className="delete-cart">Return To Shop</button>
            </Link>
            <button className="delete-cart" onClick={clearCartAll}>
              Delete All
            </button>
          </div>
          <div className="cart-bottom">
            <div className="cart-cupon">
              <input
                onChange={(e) => setCuponInput(e.target.value)}
                value={cuponInput}
                type="text"
                placeholder="Coupon Code"
              />
              <button onClick={applyCupon}>Apply Coupon</button>
            </div>
            <div className="cart-total">
              <h1>Cart Total</h1>
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
              <div className="cart-total-btn">
                <Link to={"/checkout"}>
                  <button>Procees to checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <img
            src="https://img.freepik.com/free-vector/flat-simple-buy-nothing-day-logo_742173-10787.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
