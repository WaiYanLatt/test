import { Link, NavLink, Outlet } from "react-router-dom";

const Navmyamar = (props) => {
  return (
    <div>
      <nav className="mt-5 container">
        <div className="my-3">
          <NavLink
            to="a"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            A
          </NavLink>
          <NavLink
            to="b"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            B
          </NavLink>
          <NavLink
            to="c"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            C
          </NavLink>
          <NavLink
            to="d"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            D
          </NavLink>
          <NavLink
            to="e"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            E
          </NavLink>
          <NavLink
            to="f"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            F
          </NavLink>
          <NavLink
            to="g"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            G
          </NavLink>
          <NavLink
            to="h"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
            }
          >
            H
          </NavLink>
          <NavLink
            to="i"
            className={({ isActive }) =>
              isActive
                ? " text-orange text-decoration-none fw-semibold border-end  px-3  py-1 border-black"
                : " text-black text-decoration-none fw-semibold  border-end  px-3  py-1 border-black"
            }
          >
            I
          </NavLink>
        </div>
        <div className="mb-3">
        <NavLink
          to="j"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          J
        </NavLink>
        <NavLink
          to="k"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          K
        </NavLink>
        <NavLink
          to="l"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          L
        </NavLink>
        <NavLink
          to="m"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          M
        </NavLink>
        <NavLink
          to="n"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          N
        </NavLink>
        <NavLink
          to="o"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          O
        </NavLink>
        <NavLink
          to="p"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          P
        </NavLink>
        <NavLink
          to="q"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          Q
        </NavLink>
        <NavLink
          to="r"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          R
        </NavLink>
        </div>
        <NavLink
          to="s"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          S
        </NavLink>
        <NavLink
          to="t"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          T
        </NavLink>
        <NavLink
          to="u"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          U
        </NavLink>
        <NavLink
          to="v"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          V
        </NavLink>
        <NavLink
          to="w"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          W
        </NavLink>
        <NavLink
          to="x"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          X
        </NavLink>
        <NavLink
          to="y"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          Y
        </NavLink>
        <NavLink
          to="z"
          className={({ isActive }) =>
            isActive
              ? " text-orange text-decoration-none fw-semibold border-end  px-3 py-1 border-black"
              : " text-black text-decoration-none fw-semibold  border-end  px-3 py-1 border-black"
          }
        >
          Z
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navmyamar;
