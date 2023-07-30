import { useAuth0 } from "@auth0/auth0-react";

import { dayOptions, monthOptions, yearptions } from "../utils/constants";
import { useRef } from "react";

const Profile = () => {
  const { user } = useAuth0();
  const phoneInput = useRef(null);
  const dayInput = useRef(null);
  const monthInput = useRef(null);
  const yearInput = useRef(null);
  const addressInput = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(phoneInput.current.value);
    console.log(dayInput.current.value);
    console.log(monthInput.current.value);
    console.log(yearInput.current.value);
    console.log(addressInput.current.value);
  };
  return (
    <div className="container" id="profile">
      <div className="row mb-4">
        <div className="col-sm-2">
          <div className="d-flex mb-3">
            <img
              src={user.picture}
              alt="user-picture"
              className="img-fluid rounded-circle w-25 h-25"
            />
            <div className="ms-3">
              <b>{user.nickname}</b>
              <p>
                <i className="fa-solid fa-pen-to-square"></i>
                Sửa hồ sơ
              </p>
            </div>
          </div>
          <ul>
            <li>
              <i className="fa-solid fa-user"></i>
              Tài khoản của tôi
            </li>
          </ul>
        </div>
        <div className="col-sm-10 bg-white border p-3">
          <div className="row m-2 border-bottom">
            <h5>Hồ sơ của tôi</h5>
            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          </div>
          <div className="row m-2">
            <div className="col-sm-9">
              <form className="p-2" onSubmit={submitHandler}>
                <div className="row align-items-center" id="username-row">
                  <div className="col-sm-4 text-end p-3">Tên đăng nhập</div>
                  <div className="col-sm-8 p-3">
                    <input
                      type="text"
                      placeholder={user.nickname}
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row align-items-center" id="name-row">
                  <div className="col-sm-4 text-end p-3">Tên</div>
                  <div className="col-sm-8 p-3">
                    <input
                      type="text"
                      placeholder={user.name}
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row align-items-center" id="email-row">
                  <div className="col-sm-4 text-end p-3">Email</div>
                  <div className="col-sm-8 p-3">
                    <input
                      type="text"
                      placeholder={user.email}
                      className="form-control"
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row align-items-center" id="phone_number">
                  <div className="col-sm-4 text-end p-3">Số điện thoại</div>
                  <div className="col-sm-8 p-3">
                    <input
                      type="tel"
                      placeholder="0341112222"
                      pattern="0[0-9]{2}[0-9]{4}[0-9]{3}"
                      className="form-control"
                      ref={phoneInput}
                      defaultValue={"0341112222"}
                    />
                  </div>
                </div>
                <div className="row align-items-center" id="gender">
                  <div className="col-sm-4 text-end p-3">Giới tính</div>
                  <div className="col-sm-8 p-3">
                    <div className="d-flex">
                      <div className="form-check me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="genderRadio"
                          id="male"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="male">
                          Nam
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="genderRadio"
                          id="female"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Nữ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center" id="dob">
                  <div className="col-sm-4 text-end p-3">Ngày sinh</div>
                  <div className="col-sm-8 p-3">
                    <div className="d-flex justify-content-between">
                      <select className="form-select me-2" ref={dayInput}>
                        {user &&
                          user.user_metadata &&
                          user.user_metadata.dob && (
                            <option
                              defaultValue={true}
                              value={user.user_metadata.dob.day}
                            >
                              {user.user_metadata.dob.day}
                            </option>
                          )}
                        {dayOptions.map((day) => (
                          <option value={day} key={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                      <select className="form-select mx-2" ref={monthInput}>
                        {user &&
                          user.user_metadata &&
                          user.user_metadata.dob && (
                            <option
                              defaultValue={true}
                              value={user.user_metadata.dob.month}
                            >
                              Tháng {user.user_metadata.dob.month}
                            </option>
                          )}
                        {monthOptions.map((month) => (
                          <option value={month} key={month}>
                            Tháng {month}
                          </option>
                        ))}
                      </select>
                      <select className="form-select mx-2" ref={yearInput}>
                        {user &&
                          user.user_metadata &&
                          user.user_metadata.dob && (
                            <option
                              defaultValue={true}
                              value={user.user_metadata.dob.year}
                            >
                              {user.user_metadata.dob.year}
                            </option>
                          )}
                        {yearptions.map((year) => (
                          <option value={year} key={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center" id="address-row">
                  <div className="col-sm-4 text-end p-3">Địa chỉ</div>
                  <div className="col-sm-8 p-3">
                    <input
                      type="text"
                      placeholder={
                        user && user.user_metadata && user.user_metadata.address
                      }
                      className="form-control"
                      ref={addressInput}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 p-3"></div>
                  <div className="col-sm-8 p-3">
                    <button className="btn btn-primary px-4" type="submit">
                      Lưu
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-3">
              <div className="p-2 border-start">
                <img
                  src={user.picture}
                  alt="user-picture"
                  className="img-fluid rounded-circle w-50 h-50 mb-3 d-block mx-auto"
                />
                <button className="btn btn-outline-secondary mb-3 d-block mx-auto">
                  Chọn ảnh
                </button>
                <p className="text-center">
                  Dung lượng file tối đa 1 MB
                  <br />
                  Định dạng: .JPEG, .PNG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;