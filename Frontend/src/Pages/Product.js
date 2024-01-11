import {
  IoStar,
  IoStarOutline,
  IoPersonCircle,
  IoSearch,
  IoClose,
  IoChatbubbles,
  IoFilter,
  IoChevronDown,
  IoChevronUp,
  IoEye,
  IoAdd,
  IoRemove,
  IoBookmark,
  IoChatbubblesOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Product() {
  const navigate = useNavigate();
  return (
    <div className="p-10 px-20">
      <div className="flex flex-row gap-4 mb-10">
        <div className=" font-semibold text-orange-600 cursor-pointer">
          Home
        </div>
        <div>/</div>
        <div className=" font-semibold text-orange-600 cursor-pointer">
          Jewelry
        </div>
        <div>/</div>
        <div className=" font-medium cursor-pointer">Rings</div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row items-center">
          <div className=" w-96 h-96 bg-gray-200 bg-opacity-75  rounded-t-md"></div>
          <div className="mx-5 flex flex-col justify-between gap-4">
            <div className="flex justify-center items-center text-gray-600 hover:text-orange-600 cursor-pointer rounded-md hover:bg-orange-600 hover:bg-opacity-10">
              <IoChevronUp className="text-2xl" />
            </div>
            <div className=" w-20 h-20 bg-gray-200 bg-opacity-75  rounded-t-md"></div>
            <div className=" w-20 h-20 bg-gray-200 bg-opacity-75  rounded-t-md"></div>
            <div className=" w-20 h-20 bg-gray-200 bg-opacity-75  rounded-t-md"></div>
            <div className=" w-20 h-20 bg-gray-200 bg-opacity-75  rounded-t-md"></div>
            <div className="flex justify-center items-center text-gray-600 hover:text-orange-600 cursor-pointer rounded-md hover:bg-orange-600 hover:bg-opacity-10">
              <IoChevronDown className=" text-2xl" />
            </div>
          </div>
        </div>

        <div className="ml-8 flex-1">
          <div className="text-gray-400 text-sm mb-1">Item #129327391</div>
          <div className="text-2xl font-bold mb-3">Old Ring</div>
          <div className="flex flex-row items-center">
            <div className="mr-1 text-orange-600 font-semibold text-sm">
              4.0
            </div>
            <IoStar className=" text-orange-600" />
            <IoStar className=" text-orange-600" />
            <IoStar className=" text-orange-600" />
            <IoStar className=" text-orange-600" />
            <div className="ml-1 text-gray-400 text-sm">(223)</div>
            <div className="mx-3 text-gray-300">|</div>
            <IoEye className=" text-gray-400" />
            <div className="ml-1 text-gray-900 font-semibold text-sm">
              1.4k<span className="font-medium text-gray-400"> Views</span>
            </div>
            <div className="mx-3 text-gray-300">|</div>
            <IoBookmark className=" text-gray-400 cursor-pointer hover:text-orange-600" />
          </div>
          <div className="mt-4 flex flex-row justify-between items-end mb-2">
            <div className=" text-4xl font-semibold align-text-top text-orange-600">
              $900
            </div>
            <div className=" text-md font-normal align-text-top text-gray-600">
              Bidding closes in <span className="font-bold">2 Hours</span>
            </div>
          </div>
          <div className="flex flex-row justify-end"></div>
          <div className="w-full bg-orange-600 bg-opacity-25 mb-6 h-2 rounded-md">
            <div className="w-3/4 bg-orange-600 mb-6 h-2 rounded-md" />
          </div>
          <div className="w-full bg-gray-300 mt-6 mb-6" style={{ height: 1 }} />
          <div className="text-sm pr-12 font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>

          <div className="my-6 flex flex-row gap-5">
            <div className="h-12 bg-gray-200 flex flex-row rounded-md w-52 ">
              <div className="h-12 w-12 flex flex-row justify-center items-center cursor-pointer">
                <IoRemove className="text-orange-600 text-2xl" />
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="flex-1 text-center mb-1 font-semibold text-gray-800">
                  910
                </div>
              </div>
              <div className="h-12 w-12 flex flex-row justify-center items-center cursor-pointer">
                <IoAdd className="text-orange-600 text-2xl" />
              </div>
            </div>
            <div
              className="h-12 bg-orange-600 px-10 flex flex-row justify-center items-center cursor-pointer rounded-md hover:bg-orange-700"
              onClick={() => {
                navigate("/home/order");
              }}
            >
              <div className="text-gray-50 font-semibold">Submit Bid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;