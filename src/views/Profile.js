import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import ProfileAccount from "../components/ProfileAccount";
import ProfileAddress from "../components/ProfileAddress";
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
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
