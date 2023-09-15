import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { update, selectById, remove } from "../reducers/cart";
import { priceFormatter } from "../utils/formatter";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => selectById(state, product.id));
  if (!cartItem) return null;
  const quantity = cartItem.quantity;
  const increaseQuantity = () => {
    dispatch(
      update({
        ...cartItem,
        quantity: quantity + 1,
        updatedAt: new Date().getTime(),
      })
    );
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(
        update({
          ...cartItem,
          quantity: quantity - 1,
          updatedAt: new Date().getTime(),
        })
      );
    }
  };
  const removeItem = () => {
    dispatch(remove(product.id));
  };
  return (
    <div
      className="d-flex align-items-center px-2 py-2 pb-3 border-bottom"
      id="cart-item"
      style={{ height: "8rem" }}
    >
      <button
        className="btn btn-sm btn-outline-secondary"
        id="remove-item"
        onClick={removeItem}
      >
        Xóa
      </button>
      <Link
        to={`/p/${product.name}`}
        className="d-flex align-items-center text-decoration-none"
      >
        <img
          src={product.images[0]}
          alt="product"
          className="img-fluid mx-3"
          style={{ width: "6rem", maxHeight: "6rem" }}
        />
        <div id="name">
          <p className="h5">{product.title}</p>
          <small className="fw-lighter fs-6" id="price">
            {priceFormatter(product.special_price)}
          </small>
          <p className="text-secondary fs-6">
            {new Date(product.updatedAt).toLocaleString()}
          </p>
        </div>
      </Link>

      <div className="h5 ms-auto me-3 my-auto text-danger fw-bold" id="amount">
        {priceFormatter(product.special_price * quantity)}
      </div>
      <div className="btn-group btn-group-sm" role="group" id="quantity">
        <button
          className="btn btn-outline-secondary"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          type="text"
          style={{ width: "2rem", outline: "none" }}
          readOnly
          className="text-center"
          value={quantity}
        />
        <button
          className="btn btn-outline-secondary"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
