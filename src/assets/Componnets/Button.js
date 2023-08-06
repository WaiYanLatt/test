import { Link, NavLink, Outlet } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <nav className="mt-5">
        <NavLink
          to="artist"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark bg-black border-0 px-5 text-white fw-semibold me-1"
              : "btn btn-dark  bg-orange border-0 px-5 text-black fw-semibold me-1"
          }
        >
          Artist
        </NavLink>
        <NavLink
          to="album"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark bg-black border-0 px-5 text-white fw-semibold me-1"
              : "btn btn-dark  bg-orange border-0 px-5 text-black fw-semibold me-1"
          }
        >
          Album
        </NavLink>
        <NavLink
          to="album"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark bg-black border-0 px-5 text-white fw-semibold me-1"
              : "btn btn-dark  bg-orange border-0 px-5 text-black fw-semibold me-1"
          }
        >
          Album
        </NavLink>
        <NavLink
          to="album"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark bg-black border-0 px-5 text-white fw-semibold me-1"
              : "btn btn-dark  bg-orange border-0 px-5 text-black fw-semibold me-1"
          }
        >
          Album
        </NavLink>
        <NavLink
          to="album"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark bg-black border-0 px-5 text-white fw-semibold"
              : "btn btn-dark  bg-orange border-0 px-5 text-black fw-semibold"
          }
        >
          Album
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Button;
