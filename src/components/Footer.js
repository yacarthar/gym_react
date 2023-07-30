import { business_info } from "../utils/constants";
// import paymentImg from "../../public/payments.jpg"
const Footer = () => {
  return (
    <div className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <h5 className="text-uppercase">{business_info.company_name}</h5>
            <p>{business_info.license}</p>
            <div className="d-flex">
              <i className="fa-solid fa-location-dot me-3 mt-2"></i>
              <div>
                {business_info.branch.map((branch) => (
                  <div key={branch.id}>
                    <p className="my-1">
                      <b className="text-uppercase">
                        chi nhánh tại {branch.city}
                      </b>
                    </p>
                    <p className="my-1">{branch.street}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="my-1">
              <i className="fa-solid fa-mobile me-3"></i>
              <span>Số điện thoại: {business_info.contact.hotline}</span>
            </p>
            <p className="my-1">
              <i className="fa-solid fa-envelope me-3"></i>
              <span>Email: {business_info.contact.hotline}</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-3">
            <h5 className="mb-3">Sản phẩm nổi bật</h5>
            <ul className="ps-0">
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Tất cả sản phẩm
                </a>
              </li>
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Máy chạy bộ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-3">
            <h5 className="mb-3">Chính Sách Thanh Toán</h5>
            <ul className="ps-0">
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Chính sách thanh toán
                </a>
              </li>
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Chính sách vận chuyển và giao nhận
                </a>
              </li>
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Chính sách đổi trả và hoàn tiền
                </a>
              </li>
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Chính sách bảo mật thông tin
                </a>
              </li>
              <li className="list-unstyled py-1">
                <a className="text-decoration-none text-white" href="#">
                  Chính sách xử lý khiếu nại
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-3">
            <h5 className="mb-4">Theo Dõi Chúng Tôi</h5>
            <p>
              <i className="fa-brands fa-facebook me-3 fs-2"></i>
              <i className="fa-brands fa-twitter me-3 fs-2"></i>
              <i className="fa-brands fa-youtube me-3 fs-2"></i>
              <i className="fa-brands fa-instagram me-3 fs-2"></i>
            </p>
            <h5 className="mb-4">Phương thức thanh toán</h5>
            <img
              src="/payments.jpg"
              alt="payment_methods"
              className="img-fluid mb-3"
            />
            <img
              src="/registered_biz.png"
              alt="registered_biz"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
