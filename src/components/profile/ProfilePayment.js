import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { monthOptions, yearOptions } from "../../utils/constants";
import { updateUser } from "../../utils/api";
import { parseDate, genExpireDate } from "../../utils/datetime";

const ProfilePayment = ({ userInfo }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [card, setCard] = useState({
    brand: "VISA",
    pan: "",
    expireMonth: "",
    expireYear: "",
    cvv: "",
  });

  useEffect(() => {
    if (userInfo?.card) {
      setCard({
        ...card,
        brand: userInfo.card?.brand || "VISA",
        pan: userInfo.card?.pan || "",
        expireMonth: parseDate(userInfo.card?.expiration).month || "",
        expireYear: parseDate(userInfo.card?.expiration).year || "",
        cvv: userInfo.card?.cvv || "",
      });
    }
  }, [userInfo]);
  const saveUserPayment = async (e) => {
    e.preventDefault();
    const accessToken = await getAccessTokenSilently();
    await updateUser(accessToken, {
      card: {
        brand: card.brand,
        pan: card.pan,
        expiration: genExpireDate(card.expireYear, card.expireMonth),
        cvv: card.cvv,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row m-2 border-bottom">
        <h5>Phương thức thanh toán của tôi</h5>
        <p>Thẻ ngân hàng / Thẻ tín dụng (credit)/ Thẻ ghi nợ (debit)</p>
      </div>
      <div className="row m-2">
        <form className="p-2" onSubmit={saveUserPayment}>
          <div className="row align-items-center" id="brand">
            <div className="col-sm-3 text-end p-3">Loại thẻ</div>
            <div className="col-sm-9 p-3">
              <div className="form-check me-4">
                <label className="form-check-label me-5" htmlFor="visa">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="brandRadio"
                    value="VISA"
                    id="visa"
                    checked={card.brand === "VISA"}
                    onChange={(e) => {
                      setCard({ ...card, brand: e.target.value });
                    }}
                  />
                  VISA
                </label>
                <label className="form-check-label" htmlFor="masterCard">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="brandRadio"
                    value="MasterCard"
                    id="masterCard"
                    checked={card.brand === "MasterCard"}
                    onChange={(e) => {
                      setCard({ ...card, brand: e.target.value });
                    }}
                  />
                  MasterCard
                </label>
              </div>
            </div>
          </div>
          <div className="row align-items-center" id="pan">
            <div className="col-sm-3 text-end p-3">Số thẻ</div>
            <div className="col-sm-9 p-3">
              <input
                type="text"
                placeholder="1111222233334444"
                pattern="[0-9]{16}"
                maxLength={16}
                className="form-control"
                value={card.pan}
                onChange={(e) => {
                  setCard({ ...card, pan: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="row align-items-center" id="cvv">
            <div className="col-sm-3 text-end p-3">CVV</div>
            <div className="col-sm-9 p-3">
              <input
                type="text"
                placeholder="Card security code"
                pattern="[0-9]{3}"
                maxLength={3}
                className="form-control"
                value={card.cvv}
                onChange={(e) => {
                  setCard({ ...card, cvv: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="row align-items-center" id="dob">
            <div className="col-sm-3 text-end p-3">Hạn sử dụng thẻ</div>
            <div className="col-sm-9 p-3">
              <div className="d-flex justify-content-between">
                <select
                  className="form-select me-4"
                  value={card.expireMonth}
                  onChange={(e) => {
                    setCard({ ...card, expireMonth: e.target.value });
                  }}
                >
                  {monthOptions.map((month) => (
                    <option value={month} key={month}>
                      Tháng {month + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select"
                  value={card.expireYear}
                  onChange={(e) => {
                    setCard({ ...card, expireYear: e.target.value });
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

export default ProfilePayment;
