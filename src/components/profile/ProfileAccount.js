import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { dayOptions, monthOptions, yearOptions } from "../../utils/constants";
import { updateUser } from "../../utils/api";
import { parseDate } from "../../utils/datetime";

const ProfileAccount = ({ user, userInfo }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [dateInput, setDateInput] = useState({ day: 1, month: 1, year: 2000 });
  useEffect(() => {
    if (userInfo?.dob) {
      setDateInput(parseDate(userInfo.dob));
    }
    if (userInfo?.phone_number) {
      setPhone(userInfo.phone_number);
    }
    if (userInfo?.gender) {
      setGender(userInfo.gender);
    }
  }, [userInfo]);
  const saveUserInfo = (e) => {
    e.preventDefault();
    (async () => {
      const accessToken = await getAccessTokenSilently();
      const d = new Date(
        Date.UTC(dateInput.year, dateInput.month, dateInput.day)
      );
      await updateUser(accessToken, {
        dob: d.toISOString(),
        gender: gender,
        phone_number: phone,
      });
    })();
  };
  console.log(gender, phone);
  return (
    <>
      <div className="row m-2 border-bottom">
        <h5>Hồ sơ của tôi</h5>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="row m-2">
        <div className="col-sm-9">
          <form className="p-2" onSubmit={saveUserInfo}>
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
                  className="form-control"
                  type="tel"
                  pattern="0[0-9]{2}[0-9]{4}[0-9]{3}"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row align-items-center" id="gender">
              <div className="col-sm-4 text-end p-3">Giới tính</div>
              <div className="col-sm-8 p-3">
                <div className="form-check me-4">
                  <label className="form-check-label me-5" htmlFor="male">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderRadio"
                      value="Male"
                      id="male"
                      checked={gender === "Male"}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                    Nam
                  </label>
                  <label className="form-check-label" htmlFor="female">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderRadio"
                      value="Female"
                      id="female"
                      checked={gender === "Female"}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                    Nữ
                  </label>
                </div>
              </div>
            </div>
            <div className="row align-items-center" id="dob">
              <div className="col-sm-4 text-end p-3">Ngày sinh</div>
              <div className="col-sm-8 p-3">
                <div className="d-flex justify-content-between">
                  <select
                    className="form-select me-2"
                    value={dateInput.day}
                    onChange={(e) => {
                      setDateInput({ ...dateInput, day: e.target.value });
                    }}
                  >
                    {dayOptions.map((day) => (
                      <option value={day} key={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-select mx-2"
                    value={dateInput.month}
                    onChange={(e) => {
                      setDateInput({ ...dateInput, month: e.target.value });
                    }}
                  >
                    {monthOptions.map((month) => (
                      <option value={month} key={month}>
                        Tháng {month + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-select mx-2"
                    value={dateInput.year}
                    onChange={(e) => {
                      setDateInput({ ...dateInput, year: e.target.value });
                    }}
                  >
                    {yearOptions.map((year) => (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
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
    </>
  );
};

export default ProfileAccount;
