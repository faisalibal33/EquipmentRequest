import { useSelector } from "react-redux";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import CardRequest from "../../component/cardRequest/CardRequest";
import Equipment from "../../component/equipment/Equipment";
import "./home.css";
import SearchBox from "../../component/searchBox/SearchBox";
import SkeletonRequest from "../../component/skeleton/SkeletonRequest";

const Home = () => {
  const { request, loading, error } = useSelector((state) => ({
    ...state.request,
  }));

  return (
    <div className="containerHome">
      <Navbar />
      <Header />

      <div className="homeContainer">
        <div className="boxSearch">
          <SearchBox />
          <div className="spacing"></div>
        </div>
        <Equipment />
        <div className="progressWork">
          <h2>Progress Work</h2>
          <div className="homework">
            {loading && (
              <>
                <SkeletonRequest /> <SkeletonRequest /> <SkeletonRequest />{" "}
                <SkeletonRequest />
              </>
            )}
            {!loading && error ? <h2>Error: {error} </h2> : null}
            {!loading && request ? (
              <>
                {[...request]
                  ?.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
                  .map((item) => (
                    <CardRequest item={item} key={item._id} />
                  ))}
              </>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
