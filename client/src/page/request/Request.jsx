import "./request.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardRequest from "../../component/cardRequest/CardRequest";
import { postRequest } from "../../redux/RequestSlice";
import { cycleTrue } from "../../redux/cycle";
import SearchBox from "../../component/searchBox/SearchBox";
import SkeletonRequest from "../../component/skeleton/SkeletonRequest";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Request = () => {
  const dispatch = useDispatch();
  const { equipment } = useSelector((state) => ({ ...state.equipment }));
  const { request, loading, error } = useSelector((state) => ({
    ...state.request,
  }));
  const location = useLocation();
  const datas = location.state;
  const [pass, setPass] = useState(
    datas?.equipmentName ? datas?.equipmentName : ""
  );
  const passImages =
    datas === null ? "https://www.linkpicture.com/q/pbc.jpg" : datas.images;
  const [modalOpen, setModalOpen] = useState(false);
  const [requestValue, setRequestValue] = useState({
    aircraftReg: undefined,
    equipment: pass,
    photos: passImages,
    requestDate: undefined,
    closeBy: "",
    closeDate: "",
    idNumber: undefined,
    remark: undefined,
    requestBy: undefined,
    unit: undefined,
  });

  const handleChange = (e) => {
    let date = new Date();
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const year = date.toLocaleString("default", { year: "numeric" });
    const viewDate = year + "-" + month + "-" + day;
    setRequestValue((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      requestDate: viewDate,
    }));
  };

  const handleSelect = (e) => {
    setPass(e.target.value);
    const idselect = e.target.value;
    const selectId = equipment.filter((item) =>
      item.equipmentName.includes(idselect)
    );
    setRequestValue((prev) => ({
      ...prev,
      equipment: e.target.value,
      photos: selectId[0].images,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch(postRequest(requestValue));
      dispatch(cycleTrue());
      setModalOpen(false);
    } catch (err) {
      console.log("error cuk");
    }
  };

  console.log(requestValue);
  const RequestModal = ({ item }) => {
    return (
      <div className="cardRequestModal">
        <img src={item?.photos} alt="" className="crImg" />
        <div className="crDesc">
          <h1 className="crTitle">{item?.equipment}</h1>
          <span className="crRequestby">
            {item?.requestBy} - {item?.idNumber} - {item?.unit}
          </span>
          <span className="crRemark">{item?.remark}</span>
        </div>
        <div className="crDetails">
          <div className="crReg">
            <h3>{item?.aircraftReg}</h3>
            {/* <button>100</button> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {modalOpen && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                X
              </button>
            </div>
            <div className="ModalRequest_title">
              <h1>Are your request correct?</h1>
            </div>
            <RequestModal item={requestValue} />
            <div className="footer">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button onClick={handleClick}>Continue</button>
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <Header type="list" />
      <div className="homeContainer">
        <div className="boxSearch">
          <SearchBox />
          <div className="spacing"></div>
        </div>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">GSE Request</h1>
              <div className="lsItem">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="aircraftReg"
                  onChange={handleChange}
                  label="Aircraft Registration"
                  size="small"
                  sx={{ boxShadow: 2 }}
                />
                <div className="lsItem">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="requestBy"
                    onChange={handleChange}
                    label="Request by"
                    size="small"
                    sx={{ boxShadow: 2 }}
                  />
                </div>
                <div className="dataform">
                  <div className="lsItem">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="idNumber"
                      onChange={handleChange}
                      label="ID"
                      size="small"
                      sx={{ boxShadow: 2 }}
                    />
                  </div>
                  <div className="lsItem">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="unit"
                      onChange={handleChange}
                      label="Unit"
                      size="small"
                      sx={{ boxShadow: 2 }}
                      multiline={true}
                    />
                  </div>
                </div>
                <FormControl>
                  <InputLabel id="equipment">Equipment</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="equipment"
                    value={pass || ""}
                    label="Equipment"
                    onChange={handleSelect}
                    sx={{ boxShadow: 2 }}
                  >
                    <MenuItem value={undefined}>None</MenuItem>
                    <MenuItem value="Pushback Car">Pushback Car</MenuItem>
                    <MenuItem value="Aircraft Washing Truck">
                      Aircraft Washing Truck
                    </MenuItem>
                    <MenuItem value="Main Car">Main Car</MenuItem>
                    <MenuItem value="Main Truck">Main Truck</MenuItem>
                    <MenuItem value="GPU">GPU</MenuItem>
                    <MenuItem value="Water Servicing">Water Servicing</MenuItem>
                    <MenuItem value="Portable Water">Portable Water</MenuItem>
                    <MenuItem value="Fuel Truck">Fuel Truck</MenuItem>
                    <MenuItem value="Kato">Kato</MenuItem>
                    <MenuItem value="Boomlift">Boomlift</MenuItem>
                    <MenuItem value="Lavatory Servicing">
                      Lavatory Servicing
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  margin="normal"
                  fullWidth
                  id="remark"
                  onChange={handleChange}
                  label="Remark"
                  size="normal"
                  sx={{ boxShadow: 2 }}
                  multiline={true}
                  height="100px"
                />
                {/* <textarea
                  rows="5"
                  placeholder="Remark"
                  id="remark"
                  type="text"
                  onChange={handleChange}
                  className="remark"
                /> */}
              </div>
              <Button
                variant="contained"
                onClick={() => setModalOpen(true)}
                sx={{ boxShadow: 2 }}
              >
                Request
              </Button>
            </div>
            <div className="listResult">
              {loading && (
                <>
                  <SkeletonRequest /> <SkeletonRequest /> <SkeletonRequest />
                </>
              )}
              {!loading && error ? <h1>Error: {error}</h1> : null}
              {!loading && request ? (
                <>
                  {[...request]
                    ?.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
                    .map((item) => (
                      <CardRequest item={item} key={item.createdAt} />
                    ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
