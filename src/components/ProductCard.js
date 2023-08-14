import { Link } from "react-router-dom";

import Price from "../components/helpers/Price";
import DiscountBadge from "../components/helpers/DiscountBadge";

const ProductCard = ({ className, p }) => {
  return (
    <div className={className}>
      <Link
        // href={productLink}
        to={`p/${p.name}`}
        className="text-decoration-none"
        // target="_blank"
        // rel="noreferrer"
      >
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
      </Link>
    </div>
  );
};

export default ProductCard;
