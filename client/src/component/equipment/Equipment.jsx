import "./equipment.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEquipment } from "../../redux/EquipmentSlice";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import SkeletonEquipment from "../skeleton/SkeletonEquipment";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Equipment = () => {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const { equipment, loading, error } = useSelector((state) => ({
    ...state.equipment,
  }));

  return (
    <>
      <h2 id="equipment">Support Equiment</h2>
      <div className={active ? "featured" : "featuredlist"}>
        {loading && (
          <>
            <SkeletonEquipment /> <SkeletonEquipment /> <SkeletonEquipment />
          </>
        )}
        {!loading && error ? <h2>Error: {error} </h2> : null}
        {!loading && equipment
          ? equipment.map((item) => (
              <Link to="/request" state={item} key={item._id}>
                <div className="featuredItem">
                  <img src={item.images} alt="" className="featuredImg" />
                  <div className="featuredTitles">
                    <p className="availableEquipment">{item.equipmentName}</p>
                    <p className="availableEquipment">
                      {item.quantity} Available
                    </p>
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>
      <a
        style={{ color: "inherit", textDecoration: "none" }}
        className="more"
        onClick={() => (active ? setActive(false) : setActive(true))}
      >
        {active ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </a>
    </>
  );
};

export default Equipment;
