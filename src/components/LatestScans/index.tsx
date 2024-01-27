import { Scan } from "lucide-react";
import IDCard from "../IDCard";

const LatestScans = () => {
  return (
    <div className="container">
      <div className="font-semibold text-xl text-[#454545] flex items-center gap-2">
        <Scan size={20} /> Last Scans
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <IDCard />
        <IDCard />
        <IDCard />
      </div>
    </div>
  );
};

export default LatestScans;
