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
  IoPushOutline,
} from "react-icons/io5";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "../App.css";
import Catalog from "./Catalog";
import CreateListing from "./CreateListing";
import Order from "./Order";
import Product from "./Product";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col bg-gray-50 h-screen ">
      <div className="shadow-md shadow-gray-200 bg-gray-50 z-10">
        <div className="bg-orange-600 flex-1 h-1" />
        <div className="flex p-3 px-8 flex-col">
          <div className="flex flex-row flex-1 mt-2 mb-1">
            <div className="h-12 justify-center items-center flex">
              <Link
                to={"/home/catalog"}
                className="font-semibold text-2xl pr-10"
              >
                CoreCollect
              </Link>
            </div>
            <div className="h-12 flex-1 px-3">
              <div className="h-12 bg-gray-200 flex-1 flex flex-row rounded-md">
                <div className="flex-1"></div>
                <div className="h-12 w-12 flex flex-row justify-center items-center cursor-pointer">
                  <IoClose className="text-gray-500 text-2xl" />
                </div>
                <div className="h-12 bg-gray-900 w-12 flex flex-row justify-center items-center cursor-pointer rounded-r-md">
                  <IoSearch className="text-gray-50 text-xl" />
                </div>
              </div>
            </div>
            <div className="h-12 w-12 hover:bg-gray-200 flex flex-row justify-center items-center cursor-pointer rounded-md">
              <IoChatbubblesOutline className="text-gray-900 text-2xl" />
            </div>
            <div
              className="h-12 w-12 hover:bg-gray-200 flex flex-row justify-center items-center cursor-pointer mr-3 rounded-md"
              onClick={() => {
                navigate("/home/create");
              }}
            >
              <IoPushOutline className="text-gray-900 text-2xl" />
            </div>
            <div className="h-12 bg-orange-600 px-5 flex flex-row justify-center items-center cursor-pointer rounded-md">
              <IoPersonCircle className="text-gray-50 text-2xl" />
              <div className="text-gray-50 ml-2 font-semibold">My Account</div>
            </div>
          </div>
          <div className="flex flex-row flex-1 gap-12 pt-4 mb-2">
            <div className="text-md text-gray-900 font-semibold cursor-pointer">
              All Categories
            </div>
            <div className="text-md text-gray-500 font-semibold cursor-pointer">
              Sports
            </div>
            <div className="text-md text-gray-500 cursor-pointer font-medium">
              Cards
            </div>
            <div className="text-md text-gray-500 cursor-pointer font-medium">
              Cars
            </div>
            <div className="text-md text-gray-500 cursor-pointer font-medium">
              Collectables
            </div>
            <div className="text-md text-gray-500 cursor-pointer font-medium">
              Antiques
            </div>
            <div className="text-md text-gray-500 cursor-pointer font-medium">
              Digital
            </div>
            <div className="text-md text-gray-500 cursor-pointer font-medium">
              NFTs
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
