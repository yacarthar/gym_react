import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="container" id="empty-cart" style={{ minHeight: "50vh" }}>
      <h4 className="text-primary">Giỏ hàng</h4>
      <p>
        (Chưa có sản phẩm nào) nhấn vào&nbsp;
        <Link to="/" className="text-decoration-none">
          cửa hàng
        </Link>
        &nbsp;để mua hàng
      </p>
    </div>
  );
};

export default CartEmpty;
