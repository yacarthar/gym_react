import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectIds, selectEntities } from "../reducers/cart";

import { getProducts } from "../utils/api";

import CartEmpty from "../components/helpers/CartEmpty";
import CartItem from "../components/CartItem";
import { priceFormatter } from "../utils/formatter";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const ids = useSelector(selectIds);
  const productMap = useSelector(selectEntities);
  useEffect(() => {
    (async () => {
      if (ids.length) {
        const productDetail = await getProducts(ids.join());
        var productInCart = productDetail.data.map((p) => ({
          ...p,
          quantity: productMap[p.id].quantity,
          updatedAt: productMap[p.id].updatedAt,
        }));
        productInCart.sort((a, b) => b.updatedAt - a.updatedAt);
        console.log(productInCart);
        setProducts(productInCart);
      }
    })();
  }, [productMap, ids]);
  if (!ids.length) {
    return <CartEmpty />;
  }
  const total = products.reduce((total, product) => {
    return total + product.special_price * product.quantity;
  }, 0);
  return (
    <div className="container" id="cart">
      <div className="row mb-4">
        <div className="col-md-9" id="cart-items">
          {products.map((product, index) => (
            <CartItem product={product} key={index} />
          ))}
        </div>
        <div className="col-md-3 border-start" id="cart-purchase">
          <div
            className="pb-2 mb-2 h5 fw-bold text-danger text-capitalize border-bottom border-danger"
            id="purchase-title"
          >
            hẹn giờ nhận hàng
          </div>
          <div className="py-2 mb-3" id="purchase-option">
            <p className="fw-bold">Ngày nhận hàng</p>
            <input type="date" className="form-control mb-3" />
            <p className="fw-bold">Thời gian nhận hàng</p>
            <select type="select" className="form-select">
              <option defaultValue value="Càng sớm càng tốt">
                Càng sớm càng tốt
              </option>
              <option value="Sáng: 8h00-12h00">Sáng: 8h00-12h00</option>
              <option value="Chiều: 14h00-18h00">Chiều: 14h00-18h00</option>
              <option value="Tối: 19h00-21h00">Tối: 19h00-21h00</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center" id="purchase-amout">
            <p className="text-primary">Tổng tiền</p>
            <p className="ms-auto fw-bold fs-5">{priceFormatter(total)}</p>
          </div>
          <div id="purchase-submit">
            <button className="btn btn-primary text-center text-white mb-2 w-100">
              <h5>TRẢ GÓP QUA THẺ</h5>
              <p className="text-nowrap m-1" style={{ fontSize: "0.8rem" }}>
                (Visa, Master, JCB)
              </p>
            </button>
            <button className="btn btn-warning text-center text-white mb-2 w-100">
              <h5>MUA NGAY, TRẢ SAU</h5>
              <img
                src="https://pc.baokim.vn/platform/img/icon-kredivo.svg"
                alt="baokim"
              />
            </button>
            <button className="btn btn-danger text-center text-white mb-2 w-100">
              <h6 className="my-1">Tiến hành đặt hàng</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
