import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

import { selectAll, selectTotal } from "../reducers/cart";
// import { setAxiosTokenInterceptor } from "../utils/api";

const Navbar = () => {
  const {
    user,
    isAuthenticated,
    loginWithPopup,
    logout,
  } = useAuth0();
  console.log("user: ", user);

  const itemsQuantity = useSelector(selectTotal);
  const allCartItems = useSelector(selectAll);
  console.log("allItem: ", allCartItems);

  return (
    <nav className="navbar navbar-expand bg-body-tertiary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://previews.123rf.com/images/wahyufrida/wahyufrida1909/wahyufrida190900739/130661607-bodybuilder-fitness-gym-icon-logo-badge-vector-illustration-design.jpg"
            alt="logo"
            className="img-fluid rounded-circle me-2"
            style={{ width: "4rem" }}
          />
          Gym Equipment
        </Link>
        <div className="ms-auto d-flex">
          {!isAuthenticated && (
            <button
              className="btn btn-primary"
              onClick={() => loginWithPopup({})}
            >
              Login
            </button>
          )}
          {isAuthenticated && (
            <Link className="navbar-brand" to="/cart">
              <button className="btn btn-outline-primary d-flex align-items-center">
                <i className="fas fa-shopping-bag"></i>
                <span className="mx-2 d-md-block d-none">Giỏ hàng</span>
                <span className="">{itemsQuantity}</span>
              </button>
            </Link>
          )}
          {isAuthenticated && (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-3">
                <div className="dropdown">
                  <a
                    className="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    role="button"
                  >
                    <img
                      src={user.picture}
                      alt="user"
                      className="img-fluid rounded-circle w-25 me-2"
                    />
                    {user.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => logout({})}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
