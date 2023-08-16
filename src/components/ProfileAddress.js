import { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { updateUser } from "../utils/api";
import addressVN from "../utils/address_vn.json";
const ProfileAddress = ({ userInfo }) => {
  const { getAccessTokenSilently } = useAuth0();
  const initCity = addressVN[0];
  const initDistrict = initCity.districts[0];
  const initWard = initDistrict.wards[0];
  const [address, setAdress] = useState({
    city: initCity.name,
    districts: initCity.districts,
    district: initDistrict.name,
    wards: initDistrict.wards,
    ward: initWard.name,
  });
  const [street, setStreet] = useState("");
  const cityChangeHandler = (e) => {
    const newCity = addressVN.find((c) => c.name === e.target.value);
    const newDistrict = newCity.districts[0];
    const newWard = newDistrict.wards[0];
    setAdress({
      city: newCity.name,
      districts: newCity.districts,
      district: newDistrict.name,
      wards: newDistrict.wards,
      ward: newWard.name,
    });
  };
  const districtChangeHandler = (e) => {
    const newDistrict = address.districts.find(
      (d) => d.name === e.target.value
    );
    const newWard = newDistrict.wards[0];
    setAdress({
      ...address,
      district: newDistrict.name,
      wards: newDistrict.wards,
      ward: newWard.name,
    });
  };
  const wardChangeHandler = (e) => {
    setAdress({
      ...address,
      ward: e.target.value,
    });
  };
  const saveUserAddress = (e) => {
    e.preventDefault();
    console.log(address.city, address.district, address.ward, street);
    (async () => {
      const accessToken = await getAccessTokenSilently();
      const addr = {
        city: address.city,
        district: address.district,
        ward: address.ward,
        street: street,
      };
      await updateUser(accessToken, { address: addr });
    })();
  };
  useEffect(() => {
    if (userInfo?.address?.city) {
      const _city = addressVN.find((c) => c.name === userInfo.address.city);
      if (!_city) {
        return;
      }
      const _district = _city.districts.find(
        (d) => d.name === userInfo.address.district
      );
      if (!_district) {
        return;
      }
      const _ward = _district.wards.find(
        (w) => w.name === userInfo.address.ward
      );
      if (!_ward) {
        return;
      }
      setAdress({
        city: userInfo.address.city,
        districts: _city.districts,
        district: userInfo.address.district,
        wards: _district.wards,
        ward: userInfo.address.ward,
      });
    }
    if (userInfo?.address?.street) setStreet(userInfo.address.street);
  }, [userInfo]);
  return (
    <>
      <div className="row m-2 border-bottom">
        <h5>Địa chỉ của tôi</h5>
        <p>Địa chỉ giao hàng</p>
      </div>
      <div className="row m-2">
        <form className="p-2" onSubmit={saveUserAddress}>
          <div className="row align-items-center" id="city">
            <div className="col-sm-3 text-end p-3">Thành phố/ Quận/ Phường</div>
            <div className="col-sm-9 p-3">
              <div className="d-flex justify-content-between">
                <select
                  className="form-select me-2"
                  value={address.city}
                  onChange={cityChangeHandler}
                >
                  {addressVN.map((c) => (
                    <option value={c.name} key={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select mx-2"
                  value={address.district}
                  onChange={districtChangeHandler}
                >
                  {address.districts.map((d) => (
                    <option value={d.name} key={d.code}>
                      {d.name}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select mx-2"
                  value={address.ward}
                  onChange={wardChangeHandler}
                >
                  {address.wards.map((w) => (
                    <option value={w.name} key={w.code}>
                      {w.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row align-items-center" id="street">
            <div className="col-sm-3 text-end p-3">Địa chỉ cụ thể</div>
            <div className="col-sm-9 p-3">
              <input
                type="text"
                placeholder="Số nhà / Tòa nhà / Đường"
                className="form-control"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 p-3"></div>
            <div className="col-sm-9 p-3">
              <button className="btn btn-primary px-4" type="submit">
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileAddress;
