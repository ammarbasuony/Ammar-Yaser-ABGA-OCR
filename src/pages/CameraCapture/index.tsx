import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Store
import { useAppDispatch } from "@/store/hooks";
import { setImage } from "@/store/appSlice";

const CameraCapture = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [imageSrc, setImageSrc] = useState("");
  const [stream, setStream] = useState<MediaStream>();
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
      });
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing the camera", error);
      alert("Error accessing the camera");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()); // Stop each track in the stream
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null; // Clear the video source
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context)
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      const imageUrl = canvasRef.current.toDataURL("image/png");
      setImageSrc(imageUrl);
    }
  };

  useEffect(() => {
    startCamera();

    if (videoRef.current)
      videoRef.current.addEventListener("loadedmetadata", function () {
        setVideoDimensions({
          width: videoRef.current?.clientWidth || 0,
          height: videoRef.current?.clientHeight || 0,
        });
      });

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        👉 Make sure to capture an accurte image
      </div>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Captured"
          className="max-w-[700px] w-full border border-gray-300 mx-auto rounded-xl mt-8 object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="max-w-[700px] w-full border border-gray-300 mx-auto rounded-xl mt-8"
        />
      )}
      {imageSrc ? (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => {
              setImageSrc("");
              startCamera();
            }}
            className="bg-gray-200 p-3 rounded-lg mt-6 text-sm text-gray-700"
          >
            🔁 &nbsp; Retake Photo
          </button>
          <button
            onClick={() => {
              dispatch(setImage(imageSrc));
              navigate("/main/get-data");
            }}
            className="bg-gray-200 p-3 rounded-lg mt-6 text-sm text-gray-700"
          >
            🪪 &nbsp; Get Data
          </button>
        </div>
      ) : (
        <button
          onClick={capturePhoto}
          className="bg-gray-200 p-3 rounded-lg mx-auto table mt-6 text-sm text-gray-700"
        >
          📸 &nbsp; Capture Photo
        </button>
      )}
      <canvas ref={canvasRef} className="hidden" width={videoDimensions.width*5} height={videoDimensions.height*5} />
    </div>
  );
};

export default CameraCapture;
