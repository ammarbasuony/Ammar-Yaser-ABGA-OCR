import { Scan, User } from "lucide-react";

const LatestScans = () => {
  return (
    <div className="container">
      <div className="font-semibold text-xl text-[#454545] flex items-center gap-2">
        <Scan size={20} /> Last Scans
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div className="flex max-w-md bg-[#e9e9e9] rounded-lg overflow-hidden">
          <div className="w-1/3 bg-blue-900 p-4">
            <User />
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-2xl text-gray-900 font-bold">John Doe</h2>
            <p className="mt-2 text-gray-600">Software Developer</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">Employee ID:</p>
              <p className="text-gray-600">1234567890</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">Department:</p>
              <p className="text-gray-600">Technology</p>
            </div>
            <div className="flex mt-4">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Issue Date:</p>
                <p className="text-gray-600">01/01/2024</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Expiry Date:</p>
                <p className="text-gray-600">01/01/2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestScans;
