import { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

// Store
import { useAppSelector } from "@/store/hooks";

const GetData = () => {
  const image = useAppSelector((state) => state.app.image);
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      //   if (!image) return;
      Tesseract.recognize(
        image,
        "eng", // Or the appropriate language code
        {
          logger: (m) => console.log(m), // Logs progress for debugging
        }
      ).then(({ data: { text } }) => {
        setText(text);
      });
    })();
  }, [image]);

  return <div className="container">{text}</div>;
};

export default GetData;
