import { useNavigate } from "react-router-dom";
import { Camera, FileImage } from "lucide-react";

// Components
import LatestScans from "@/components/LatestScans";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-primary py-10">
        <div className="container">
          <div className="text-center text-white text-2xl">
            ID & Passport <br />{" "}
            <span className="font-extrabold uppercase text-4xl">Scanner</span>
          </div>

          <div className="flex items-center gap-8 justify-center mt-12">
            <div
              className="flex flex-col gap-2 cursor-pointer active:opacity-40"
              onClick={() => navigate("/main/camera")}
            >
              <div className="text-white border-white border-2 w-16 h-16 rounded-full flex items-center justify-center">
                <Camera size={32} />
              </div>
              <div className="text-center text-white">Camera</div>
            </div>
            <div className="flex flex-col gap-2 cursor-pointer active:opacity-40">
              <div className="text-white border-white border-2 w-16 h-16 rounded-full flex items-center justify-center">
                <FileImage size={30} />
              </div>
              <div className="text-center text-white">Upload</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <LatestScans />
      </div>
    </>
  );
};

export default Home;
