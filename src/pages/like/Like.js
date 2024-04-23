import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import axios from "../../api/index";
import "./Like.css";

function Like() {
  const wishList = useSelector((state) => state.wishlist.value);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="like-top-1">
        <div className="month-top-1">
          <div className="month-top-1-1"></div>
          <p>Wishlist</p>
        </div>
        <div className="month-top-2">
          <button>Move All To Bag</button>
        </div>
      </div>
      {wishList.length ? (
        <Card data={wishList} />
      ) : (
        <div className="empty">
          <img
            src="https://img.freepik.com/free-vector/flat-simple-buy-nothing-day-logo_742173-10787.jpg"
            alt=""
          />
        </div>
      )}

      <div className="like-top">
        <div className="month-top-1">
          <div className="month-top-1-1"></div>
          <p>Just For You</p>
        </div>
        <div className="month-top-2">
          <button>See All</button>
        </div>
      </div>
      <Card data={data.slice(2, 6)} />
    </div>
  );
}

export default Like;
