import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

// Store
import { useAppSelector } from "@/store/hooks";

// Utils
import { camelToWords } from "@/utils/functions.util";

const GetData = () => {
  const image = useAppSelector((state) => state.app.image);
  const [data, setData] = useState({});

  const extractText = async () => {
    if (!image) return;

    const worker = await createWorker("eng");
    const {
      data: { text },
    } = await worker.recognize(image);
    extractData(text);

    await worker.terminate();
  };

  const extractData = (text: string) => {
    const countryMatch = text.match(/UNITED ARAB EMIRATES/);
    const passportNoMatch = text.match(/ARE\s+(\w+)/);
    const nameMatch = text.match(/([A-Z\s]+)\s+£\s+Nationaity/);
    const nationalityMatch = text.match(
      /Nationa[lity]+ *: *: *dial *([A-Za-z\s]+) *sandal\)/
    );
    const dobMatch = text.match(
      /Date\s*of\s*Bith[^:]*:\s*(\d{2}\/\d{2}\/\d{4})/
    );
    const placeOfBirthMatch = text.match(
      /Place\s*of\s*Birth[^&]*&\s*([A-Z]+)\s/
    );
    const dateOfIssueMatch = text.match(
      /(\d{2}\/\d{2}\/\d{4})\s*se\s*lssungAdthority/
    );

    setData({
      country: countryMatch ? countryMatch[0] : null,
      passportNo: passportNoMatch ? passportNoMatch[1] : null,
      name: nameMatch ? nameMatch[1] : null,
      nationality: nationalityMatch ? nationalityMatch[1] : null,
      dateOfBirth: dobMatch ? dobMatch[1] : null,
      placeOfBirth: placeOfBirthMatch ? placeOfBirthMatch[1] : null,
      dateOfIssue: dateOfIssueMatch ? dateOfIssueMatch[1] : null,
    });
  };

  useEffect(() => {
    extractText();
  }, [image]);

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold">{camelToWords(key)}</div>
            <div className="bg-[#f3f3f3] p-2 rounded-lg text-md text-gray-600">
              {value as string}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;
