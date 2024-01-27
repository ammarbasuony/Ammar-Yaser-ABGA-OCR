import { User } from "lucide-react";

const IDCard = () => {
  return (
    <div className="max-w-md bg-[#e9e9e9] rounded-lg overflow-hidden py-3 px-5">
      <div className="text-center w-full text-gray-900 font-bold">
        جمهورية مصر العربية
        <br />
        <span className="font-normal">بطاقة تحقيق شخصية</span>
      </div>

      <div className="grid grid-cols-4 mt-4 text-gray-700">
        <div className="col-span-1">
          <div className="w-full border-2 border-gray-400 text-gray-400 rounded-lg h-28 flex items-center justify-center">
            <User size={50} />
          </div>

          <div className="text-center mt-3 p-2 bg-[#d3d2d2] rounded-md">1998\10\01</div>
        </div>
        <div className="col-span-3">
          <div className="text-right font-medium text-md">
            عمار
            <br />
            ياسر محمد بسيوني عطيه
          </div>
          <div className="text-right font-medium text-md mt-4">
            الآوقاف ٤ - برج محمد عبداللطيف آول كفر الشيخ - كفر الشيخ
          </div>
          <div className="text-right font-bold text-lg mt-4">
            29810011501053
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
