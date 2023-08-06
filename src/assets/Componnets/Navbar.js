import { NavLink } from "react-router-dom";
import Amphouse from "../img/Amphouse.svg";
import Amphouse1 from "../img/Amphousecopy.svg";

const Navbar = (props) => {
  return (
    <div className="position-relative">
      <div className="navbar navbar-expand-lg bg-black position-fixed top-0 z-30 w-100">
        <div className="container">
          <img src={Amphouse} className="w-37 d-no d-nonetab" />
          <div className="d-flex  justify-content-between align-items-center">
            <h6 className="text-light me-3 d-no">music is waiting for you...</h6>
            <form className="w-input" role="search">
              <input className="form-control me-lg-2 rounded-4 border-0" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className="d-flex align-items-center">
              <h6 className="text-white ms-3">EN</h6>
              <h6 className="text-white ms-3 border-2 border-top-0 border-end-0 border-bottom-0 border p-2">MM</h6>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-orange position-fixed topnav z-30 w-100 shadow">
        <div className="container">
        <img src={Amphouse1} className="w-37 display0 d-sho d-showtab" />
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item  px-lg-5  border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium p text-decoration-none text-nowrap"
                      : "text-decoration-none p fw-medium text-nowrap text-black"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  px-lg-4  border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium p text-decoration-none text-nowrap"
                      : "text-decoration-none p fw-medium text-nowrap text-black"
                  }
                  to="late"
                >
                  Latest Hits
                </NavLink>
              </li>
              <li className="nav-item  px-lg-5 border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium text-decoration-none text-nowrap"
                      : "text-decoration-none fw-medium text-nowrap text-black"
                  }
                  to="explore"
                >
                  Explore
                </NavLink>
              </li>
              <li className="nav-item  px-lg-5  border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium text-decoration-none text-nowrap"
                      : "text-decoration-none fw-medium text-nowrap text-black"
                  }
                  to="lyrics"
                >
                  Lyrics
                </NavLink>
              </li>
              <li className="nav-item  px-lg-5  border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium text-decoration-none text-nowrap"
                      : "text-decoration-none fw-medium text-nowrap text-black"
                  }
                  to="contribute"
                >
                  Contribute
                </NavLink>
              </li>
              <li className="nav-item  px-lg-4  border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium text-decoration-none text-nowrap"
                      : "text-decoration-none fw-medium text-nowrap text-black"
                  }
                  to="request"
                >
                  Request
                </NavLink>
              </li>
              <li className="nav-item  px-lg-4  border-2 border-top-0 border-start-0 border-black border-bottom-0 border">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white fw-medium text-decoration-none text-nowrap"
                      : "text-decoration-none fw-medium text-nowrap text-black"
                  }
                  to="news"
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item  px-lg-4">
                <i className="fa-brands me-3 fa-facebook"></i>
                <i className="fa-brands me-3 fa-twitter"></i>
                <i className="fa-brands me-3 fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;