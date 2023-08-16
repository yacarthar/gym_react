import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import ProfileAccount from "../components/ProfileAccount";
import ProfileAddress from "../components/ProfileAddress";
import ProfilePayment from "../components/ProfilePayment";
import { getUser } from "../utils/api";

const Profile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userInfo, setUserInfo] = useState({});
  // getDate(userInfo?.dob)

  useEffect(() => {
    (async () => {
      const accessToken = await getAccessTokenSilently();
      await getUser(accessToken)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <div className="container" id="profile">
      <div className="row mb-4">
        <div className="col-sm-3" id="navigator">
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
          <ul className="list-unstyled">
            <li className="py-2">
              <Link to="/profile" className="text-black text-decoration-none">
                <i className="fa-solid fa-user me-2"></i>
                Tài khoản của tôi
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/profile/address"
                className="text-black text-decoration-none"
              >
                <i className="fa-solid fa-house me-2"></i>
                Địa chỉ
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/profile/payment"
                className="text-black text-decoration-none"
              >
                <i className="fa-solid fa-credit-card me-2"></i>
                Phương thức thanh toán
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-9 bg-white border p-3" style={{minHeight: "50vh"}}>
          <Routes>
            <Route
              index
              // path="/account"
              element={<ProfileAccount user={user} userInfo={userInfo} />}
            />
            <Route
              path="/address"
              element={<ProfileAddress userInfo={userInfo} />}
            />
            <Route
              path="/payment"
              element={<ProfilePayment userInfo={userInfo} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
