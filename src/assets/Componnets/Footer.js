import { NavLink } from "react-router-dom";
import Amphouse from "../img/Amphousecopy.svg";

const Footer = (props) => {
    return (
        <div className="position-relative">
            <div className="container-fluid bg-black py-5 position-absolute top-0">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 ms-2 ms-lg-0 ms-md-0">
                            <img src={Amphouse} className="w-50" />
                            <div className="mt-3">
                                <p className="fw-semibold text-white fs-9">
                                    Most extensive collection of myanmar music
                                    <br /> lyrics on the internet
                                </p>
                                <div className="mt-lg-5 mt-3">
                                    <i className="fa-brands text-white fa-1x me-3 fa-facebook"></i>
                                    <i className="fa-brands text-white fa-1x me-3 fa-twitter"></i>
                                    <i className="fa-brands text-white fa-1x me-3 fa-instagram"></i>
                                    <i className="fa-brands text-white fa-1x fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-3 mt-lg-0">
                            <ul className="list-style">
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="late"
                                    >
                                        Latest Hits
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="explore"
                                    >
                                        Explore
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="lyrics"
                                    >
                                        Lyrics
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="contribute"
                                    >
                                        Contribute
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="request"
                                    >
                                        Request
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="news"
                                    >
                                        News
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 col-md-3 mt-3 mt-lg-0">
                            <ul className="list-style">
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="#"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="#"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="#"
                                    >
                                        Language
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="#"
                                    >
                                        Privacy policy
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="#"
                                    >
                                        Terms of use
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white fs-9 fw-semibold text-decoration-none "
                                                : "text-decoration-none fs-9 fw-semibold  text-white"
                                        }
                                        to="#"
                                    >
                                        Cookie Popup
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;