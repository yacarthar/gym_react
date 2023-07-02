import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary mb-4">
      <div className="container">
        <img
          src="https://previews.123rf.com/images/wahyufrida/wahyufrida1909/wahyufrida190900739/130661607-bodybuilder-fitness-gym-icon-logo-badge-vector-illustration-design.jpg"
          alt="logo"
          className="img-fluid rounded-circle me-2"
          style={{width: "5rem"}}
        />
        <a className="navbar-brand" href="#">
          Gym Equipment
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                English
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Chinese
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Espanol
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Francais
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
