import React from "react";

const ProductDetail = () => {
  return (
    <div className="container">
      {/* product intro */}
      <div className="row mb-4 border-bottom pb-4">
        <div className="col-lg-5 col-sm-12">
          <div id="carouselExample" className="carousel slide mb-4">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://placehold.co/600x400/png"
                  className="d-block w-100"
                  alt="product-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://placehold.co/600x400/png"
                  className="d-block w-100"
                  alt="product-img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://placehold.co/600x400/png"
                  className="d-block w-100"
                  alt="product-img"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="h3 text-primary">Giàn tập đa năng 908S (JL-908S)</div>
          <p id="desc">
            Thương hiệu <span className="text-primary">Đang cập nhật</span> |
            Tình trạng: <span className="text-primary">Còn hàng</span>
          </p>
          <div className="bg-danger-subtle text-center mb-2">
            <span className="display-6 text-danger fw-medium">
              17.650.000đ{" "}
            </span>
            <span>
              <s>23.550.000đ</s>
            </span>
          </div>
          <div className="border border-warning bg-warning-subtle mb-2 p-2">
            <h4 className="text-primary">
              <i className="fa-solid fa-gift me-2"></i>
              &nbsp;KHUYẾN MÃI
            </h4>
            <ul>
              <li>Khuyến mãi giảm giá sản phẩm áp dụng đến 31/07/2023</li>
            </ul>
          </div>
          <div className="mb-2">
            <form action="">
              <label htmlFor="quantityInput" className="form-label">
                Số lượng:
              </label>
              <input
                type="number"
                className="form-control w-50"
                placeholder="1"
                min={1}
              />
            </form>
          </div>
          <button className="btn btn-danger text-center text-white mb-2 w-100">
            <h5>MUA NGAY, GIAO TẬN NƠI</h5>
            <p className="text-nowrap m-1" style={{ fontSize: "0.8rem" }}>
              (XEM HÀNG, KHÔNG MUA KHÔNG SAO)
            </p>
          </button>
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
          <button className="btn btn-primary text-center text-white mb-2 w-100">
            <h6 className="my-1">Hotline: 034 6666 8888</h6>
          </button>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row border mb-3 p-2">
            <h5 className="text-primary">Thể thao Đông Á</h5>
            <p className="my-1">
              <i className="fa-solid fa-square-check text-success me-2"></i>
              Cam kết hàng chính hãng 100%.
            </p>
            <p className="my-1">
              <i className="fa-solid fa-square-check text-success me-2"></i>
              Xuất hóa đơn VAT chính Hãng.
            </p>
            <p className="my-1">
              <i className="fa-solid fa-square-check text-success me-2"></i>
              Vận chuyển lắp đặt tại nhà trên toàn quốc.
            </p>
            <p className="my-1">
              <i className="fa-solid fa-square-check text-success me-2"></i>
              Bảo hành, đổi trả hàng trong 15 ngày.
            </p>
          </div>
          <div className="row border p-2">
            <h5 className="text-primary">Liên hệ</h5>
            <p className="my-1">
              <i className="fa-solid fa-location-dot me-2"></i>
              <b>CHI NHÁNH TẠI HÀ NỘI: </b>
              31 Khuất Duy Tiến, Thanh Xuân, Hà Nội
            </p>
            <p className="my-1">
              <i className="fa-solid fa-phone me-1"></i>
              <span className="text-primary">034.6666.8888</span>
            </p>
            <p className="my-1">
              <i className="fa-solid fa-phone me-1"></i>
              <span className="text-primary">034.6666.9999</span>
            </p>
            <p className="my-1">
              <i className="fa-solid fa-location-dot me-2"></i>
              <b>CHI NHÁNH TẠI TP.HCM: </b>
              10 đường Trần Trọng Cung, P. Tân Thuận Đông, Q7, TP.HCM
            </p>
            <p className="my-1">
              <i className="fa-solid fa-phone me-1"></i>
              <span className="text-primary">034.6666.8888</span>
            </p>
            <p className="my-1">
              <i className="fa-solid fa-phone me-1"></i>
              <span className="text-primary">034.6666.9999</span>
            </p>
          </div>
        </div>
      </div>

      {/* product description */}
      <div className="row mb-4">
        <div className="col-md-9">
          <div className="bg-primary p-2 mb-3">
            <h4 className="text-white my-1">Mô tả sản phẩm</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-primary text-white p-2">
            <h4 className="text-white my-1">Có thể bạn sẽ thích</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
