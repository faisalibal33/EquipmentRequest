import "./navbar.css";
import gmflogo from "../../images/GMFaeroasia.png";
import gmflogo2 from "../../images/GMF-Aeroasia.png";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import profileImage from "../../images/faisal.jpg";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import CottageIcon from "@mui/icons-material/Cottage";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { user } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(window.scrollY >= 80 ? true : false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  document.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "hmnavbar hmactive" : "hmnavbar"}>
      <div className="navContainer">
        <div>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            {navbar && <img src={gmflogo2} alt="GMF-Aeroasia" height="35px" />}
            {!navbar && <img src={gmflogo} alt="GMF-Aeroasia" height="125px" />}
          </Link>
        </div>
        <div className={navbar ? "navbarLink" : "navbarLink navLinkNone"}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <div
              className={path === "" ? "btactive" : ""}
              style={{ display: "flex", alignItems: "center", gap: "3px" }}
            >
              <CottageIcon sx={{ color: "gray" }} />
              <span style={{ color: "gray", fontWeight: "500" }}>Beranda</span>
            </div>
          </Link>
          <Link
            to="/request"
            style={{ color: "inherit", textDecoration: "none" }}
            state="request"
          >
            <div
              className={path === "request" ? "btactive" : ""}
              style={{ display: "flex", alignItems: "center", gap: "3px" }}
            >
              <FlightLandOutlinedIcon sx={{ color: "gray" }} />
              <span style={{ color: "gray", fontWeight: "500" }}>Request</span>
            </div>
          </Link>
          <Link
            to="/dashboard"
            style={{ color: "inherit", textDecoration: "none" }}
            state="request"
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "3px" }}
              className={path === "dashboard" ? "btactive" : ""}
            >
              <DashboardOutlinedIcon sx={{ color: "gray" }} fontSize="small" />
              <span style={{ color: "gray", fontWeight: "500" }}>
                Dashboard
              </span>
            </div>
          </Link>
        </div>
        {user ? (
          <div className="profile">
            {navbar ? (
              <p style={{ color: "gray", fontWeight: "600" }}>{user.name}</p>
            ) : (
              <p>{user.name}</p>
            )}

            <img
              src={profileImage}
              alt="Profile Image"
              className="profileimg"
            />
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
