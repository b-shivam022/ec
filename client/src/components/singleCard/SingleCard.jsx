import React from "react";
import { useParams } from "react-router-dom";
import SectionData from "../section/SectionData";
import "./SingleCard.css";

const SingleCard = () => {
  const { cNo } = useParams();
  const { id, title, price, description, image, rating, category } =
    SectionData[cNo - 1];
  const handleCart = () => {};

  return (
    <section>
      <div className="singleItem">
        <div className="singleItem_img">
          <img src={image} alt={title} />
        </div>
        <div className="singleitem_detail">
          <div className="singleitem_name">{title}</div>
          <div className="singleitem_price">$ {price}</div>
          <div className="singleitem_rating">
            {rating.rate}({rating.count} Customers Review)
          </div>
          <div className="singleitem_desc">{description}</div>
          <div className="singleitem_cart" onClick={() => handleCart(id)}>
            ADD TO CART
          </div>
          <div className="singleitem_category">Categories : {category}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
