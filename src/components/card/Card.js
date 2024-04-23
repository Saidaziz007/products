import React from "react";
import gucciBag from "../../images/gucci-bag.svg";
import rating from "../../images/rating.svg";
import "./Card.css";
import { CARD_IMG } from "../../static";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../context/wishlistSlice";
import { Link } from "react-router-dom";

function Card({ data }) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.value);
  return (
    <div className="card-wrapper">
      {data?.map((el) => (
        <div key={el.id} className="card">
          <div className="card-img-btns">
            <button onClick={() => dispatch(toggleWishlist(el))}>
              {wishList.some((s) => s.id === el.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
          <div className="card-img">
            <Link to={`/product/${el.id}`}>
              <img src={CARD_IMG[el.id]?.img} alt="" />
            </Link>
            <button>Add to Cart</button>
          </div>
          <div className="card-info">
            <h1>{CARD_IMG[el.id]?.title}</h1>
            <div className="card-price">
              <h3>${el.price}</h3>
              <h3 className="card-price-old">${el.price * 2}</h3>
            </div>
            <div className="card-rating">
              <img src={rating} alt="" />
              <p>({el.rating})</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
