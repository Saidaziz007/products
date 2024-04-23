import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/index";
import "./Single.css";
import { CARD_IMG } from "../../static";
import rating from "../../images/rating.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../context/wishlistSlice";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import Card from "../../components/card/Card";

function Single() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [findProduct, setFindProduct] = useState(null);
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setData(res.data.products);
        const foundProduct = res.data.products.find((el) => el.id === +id);
        setFindProduct(foundProduct);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      {findProduct && (
        <div className="single-top">
          <div className="single-left">
            {findProduct.id && (
              <img
                className="single-img-img"
                src={CARD_IMG[findProduct.id]?.img}
                alt=""
              />
            )}
          </div>
          <div className="single-right">
            <h1>{CARD_IMG[findProduct.id]?.title}</h1>
            <div className="card-rating">
              <img src={rating} alt="" />
              <p>({findProduct.rating})</p>|<span>In Stock</span>
            </div>
            <p className="single-price">${findProduct.price}.00</p>
            <p className="single-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sit
              facere, quis rem qui optio minus maxime dolores aliquam
              doloremque.
            </p>
            <hr />
            <div className="single-counter">
              <div className="single-counter-1">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button className="single-buy">Buy Now</button>
              <button
                className="single-like"
                onClick={() => dispatch(toggleWishlist(findProduct))}
              >
                {wishList.some((s) => s.id === findProduct.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
            <div className="single-right-1">
              <div className="single-delivery">
                <MdOutlineDeliveryDining />
                <div className="single-delivery-1">
                  <h4>Free Delivery</h4>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="single-delivery">
                <GiReturnArrow />
                <div className="single-delivery-1">
                  <h4>Return Delivery</h4>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="single-bottom">
        <div className="month-top-1">
          <div className="month-top-1-1"></div>
          <p>Related Item</p>
        </div>
        <Card data={data.slice(2, 6)} />
      </div>
    </div>
  );
}

export default Single;
