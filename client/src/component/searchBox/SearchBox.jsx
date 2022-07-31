import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "./searchbox.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBox = () => {
  return (
    <div className="headerSearchaa">
      <div className="headerSearchItem">
        <SearchOutlinedIcon color="gray" />
        <input type="text" placeholder="Search" className="headerSearchInput" />
      </div>
      <div className="headerSearchDate">
        <CalendarMonthOutlinedIcon color="gray" />
        <span></span>
      </div>
    </div>
  );
};

export default SearchBox;
