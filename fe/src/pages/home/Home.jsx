import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss";
function Home() {
  const [data, setData] = useState([]);

  async function getAllData() {
    const response = await fetch("http://localhost:3000");
    const movies = await response.json();
    setData(movies);
  }
  useEffect(() => {
  getAllData()
  },[]);
  function asc(value) {
      let a=data.sort((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0))
      console.log(a)
    setData([...data.sort((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0))])
  }

  function dsc(value) {
  let b=  data.sort((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0))
  console.log(b)
    setData([...data.sort((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0))])
  }
  return (
    <div>
        <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
      <main>
        <section className="hero">
          <div className="titleDesc">
            <p>Fresh Flower & Gift Shop</p>
            <h1 className="title">
              Making beautiful flowers a part of your life.
            </h1>
            <button className="btn">Shop now</button>
          </div>
        </section>
        <section className="benefits">
          <div className="benefitCard">
            <div className="cardImg">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png"
                alt=""
              />
            </div>
            <div className="cardTexts">
              <h4>100% Freshness</h4>
              <p className="cardText">
                Most people are unaware of the less common flower
              </p>
            </div>
          </div>
          <div className="benefitCard">
            <div className="cardImg">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png"
                alt=""
              />
            </div>
            <div className="cardTexts">
              <h4>100% Freshness</h4>
              <p className="cardText">
                Most people are unaware of the less common flower
              </p>
            </div>
          </div>
          <div className="benefitCard">
            <div className="cardImg">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png"
                alt=""
              />
            </div>
            <div className="cardTexts">
              <h4>100% Freshness</h4>
              <p className="cardText">
                Most people are unaware of the less common flower
              </p>
            </div>
          </div>
          <div className="benefitCard">
            <div className="cardImg">
              <img
                src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png"
                alt=""
              />
            </div>
            <div className="cardTexts">
              <h4>100% Freshness</h4>
              <p className="cardText">
                Most people are unaware of the less common flower
              </p>
            </div>
          </div>
        </section>
        <section className="catagories">
          <div className="categoriesCard cardFirst">
            <div className="text">
              Fresh Flower
              <p>( 25 items )</p>
            </div>
          </div>

          <div className="categoriesCard cardSecond">
            <div className="text">
              Fresh Flower
              <p>( 25 items )</p>
            </div>
          </div>

          <div className="categoriesCard cardThird">
            <div className="text">
              Fresh Flower
              <p>( 25 items )</p>
            </div>
          </div>
          <div className="categoriesCard cardFourth">
            <div className="text">
              Fresh Flower
              <p>( 25 items )</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="title">
            <div className="card-left">
              <p className="about-text">ABOUT US</p>
              <h2>We provide all kinds of fresh flower services</h2>
            </div>
            <div className="card-right">
              <p>
                For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                Canada, growing flowers that can be dried and incorporated into
                late fall and winter floral arrangements has been a
                game-changer. During her growing season, this farmer-florist
                relies on a vivid palette of annuals, perennials and ornamental
                grasses to supply her studio.
              </p>
            </div>
          </div>
          <div className="cards-flowers">
            <div className="card-left-img">
              <img
                src="https://preview.colorlib.com/theme/florist/img/about/about-video.jpg"
                alt=""
              />
            </div>
            <div className="card-right-img-text">
              <p>SLOW FLOWERS’ FLORAL INSIGHTS</p>
              <h2>Dried flowers are having a renaissance</h2>
              <p>
                This awareness has been stimulated by sustainable sourcing
                practices and the desire on the part of North American flower
                growers to “extend the season” beyond the last frost.
              </p>
              <button className="btn">Contact us</button>
            </div>
          </div>
        </section>
        <section className="arrivals">

          <p className="flower">OUR FLOWER</p>
          <h2>New Arrivals</h2>
          <ul className="items">
            <li className="item-list">All</li>
            <li className="item-list">Bouquet</li>
            <li className="item-list">Flower box</li>
            <li className="item-list">Flower shelf</li>
            <li className="item-list" onClick={()=>asc("price")}>asc </li>
            <li className="item-list" onClick={()=>dsc("price")}>dsc</li>
          </ul>
          <div className="cards">
            {data.map((x) => {
              return (
                <>
                  <div className="card" key={x._id}>
                    <img src={x.img} alt="" />
                    <p>{x.name}</p>
                    <p>{x.price}</p>
                    <div><i className="fa-regular fa-heart"></i></div>
                    <div><i className="fa-solid fa-bag-shopping"></i></div>
                  </div>
                </>
              );
            })}
          </div>
          <p className="product">VIEW ALL PRODUCTS</p>
        </section>
        <section className="allProduct">
           <p className="customFlower">CUSTOM FLOWER</p>
           <h2 className="description">Let our flowers make your party more perfect.</h2>
<div className="btns">
    <div className="btn-order">
    Order Now
    </div>
    <div className="btn">
    Contact Us
    </div>
</div>
        </section>

      </main>
    </div>
  );
}

export default Home;
