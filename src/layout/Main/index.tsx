import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-primary py-10">
        <div className="container">
          <div
            className="text-center text-white text-2xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            ID & Passport <br />{" "}
            <span className="font-extrabold uppercase text-4xl">Scanner</span>
          </div>
        </div>
      </div>

      <div className="my-10">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
