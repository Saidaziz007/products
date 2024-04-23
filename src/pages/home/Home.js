import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import { HERO_LEFT } from "../../static";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import appleLogo from "../../images/apple-logo.svg";
import { FaArrowRight } from "react-icons/fa";
import iphone14 from "../../images/iphone14pro.png";
import gucciBag from "../../images/gucci-bag.svg";
import gamePlayer from "../../images/gamer.svg";
import axios from "../../api/index";
import Card from "../../components/card/Card";
import bannerRight from "../../images/banner-right.svg";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero-left">
            <ul className="hero-list">
              {HERO_LEFT?.map((el) => (
                <li className="hero-items" key={el.id}>
                  {el.title}
                  {el.icon}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-right">
            <Swiper
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero-banner-1">
                  <div className="hero-banner-left">
                    <div className="hero-banner-left-img">
                      <img src={appleLogo} alt="" />
                      <p>iPhone 14 Series</p>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-banner-right">
                    <img src={iphone14} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-banner-2">
                  <div className="hero-banner-left">
                    <div className="hero-banner-left-img">
                      <p>Gucci Bag Series</p>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-banner-right">
                    <img src={gucciBag} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-banner-3">
                  <div className="hero-banner-left">
                    <div className="hero-banner-left-img">
                      <p>Juystick Series</p>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button>
                      Shop Now <FaArrowRight />
                    </button>
                  </div>
                  <div className="hero-banner-right">
                    <img src={gamePlayer} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="month">
          <div className="month-top">
            <div className="month-top-1">
              <div className="month-top-1-1"></div>
              <p>This Month</p>
            </div>
            <div className="month-top-2">
              <h1>Best Selling Products</h1>
              <button>View All</button>
            </div>
          </div>
        </div>
        <div className="cards">
          <Card data={data.slice(0, 4)} />
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="banner-all">
            <div className="banner-left">
              <h4>Categories</h4>
              <h1>Enhance Your Music Experience</h1>
              <div className="banner-left-timer">
                <div className="banner-elft-timer-1">
                  <h3>23</h3>
                  <p>Hours</p>
                </div>
                <div className="banner-elft-timer-1">
                  <h3>05</h3>
                  <p>Days</p>
                </div>
                <div className="banner-elft-timer-1">
                  <h3>59</h3>
                  <p>Minutes</p>
                </div>
                <div className="banner-elft-timer-1">
                  <h3>35</h3>
                  <p>Seconds</p>
                </div>
              </div>
              <button>Buy Now!</button>
            </div>
            <div className="banner-right">
              <img src={bannerRight} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="month-top">
            <div className="month-top-1">
              <div className="month-top-1-1"></div>
              <p>Our Products</p>
            </div>
            <div className="month-top-2">
              <h1>Explore Our Products</h1>
            </div>
          </div>
          <Card data={data.slice(4, 12)} />
        </div>
      </div>
    </section>
  );
}

export default Home;
