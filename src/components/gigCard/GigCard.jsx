import React from 'react';

const UserInfo = ({ item }) => (
  <div className="user">
    <img src={item.pp} alt="" />
    <span>{item.username}</span>
  </div>
);

const GigInfo = ({ item }) => (
  <div className="info">
    <UserInfo item={item} />
    <p>{item.desc}</p>
    <div className="star">
      <img src="./img/star.png" alt="" />
      <span>{item.star}</span>
    </div>
  </div>
);

const PricingInfo = ({ item }) => (
  <div className="detail">
    <img src="./img/heart.png" alt="" />
    <div className="price">
      <span>STARTING AT</span>
      <h2>
        $ {item.price}
        <sup>99</sup>
      </h2>
    </div>
  </div>
);

const GigCard = ({ item }) => (
  <Link to={`/gig/${item.id}`} className="link">
    <div className="gigCard">
      <img src={item.img} alt="" />
      <GigInfo item={item} />
      <hr />
      <PricingInfo item={item} />
    </div>
  </Link>
);

export default GigCard;

