import React from "react";
import Price from "../components/Price";
import DiscountBadge from "../components/DiscountBadge";

const ProductCard = ({ className, p }) => {
  return (
    <div className={className}>
      <a href={p.link} target="_blank" className="text-decoration-none">
        <div className="card p-1">
          <div className="bg-success-subtle">
            <div className="badge bg-danger my-2 ms-2">trả góp</div>
            <img
              src={p.images[0]}
              alt="product-img"
              className="d-block img-fluid mx-auto"
              style={{ height: "18rem" }}
            />
            <DiscountBadge
              className="badge bg-danger my-2 ms-2"
              oldPrice={p.old_price}
              newPrice={p.special_price}
            />
          </div>
          <div className="card-body " style={{ height: "7rem" }}>
            <h6 className="card-title">{p.title}</h6>
            <Price
              className="card-text"
              oldPrice={p.old_price}
              newPrice={p.special_price}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
