import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, FileImage } from "lucide-react";

// Store
import { useAppDispatch } from "@/store/hooks";
import { setImage } from "@/store/appSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="bg-primary py-10 h-screen">
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
            <div
              className="flex flex-col gap-2 cursor-pointer active:opacity-40"
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
            >
              <div className="text-white border-white border-2 w-16 h-16 rounded-full flex items-center justify-center">
                <FileImage size={30} />
              </div>
              <div className="text-center text-white">Upload</div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  const imageUrl = URL.createObjectURL(file as Blob);

                  dispatch(setImage(imageUrl));
                  navigate("/main/get-data");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
