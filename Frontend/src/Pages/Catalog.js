import {
  IoStar,
  IoStarOutline,
  IoPersonCircle,
  IoSearch,
  IoClose,
  IoChatbubblesOutline,
  IoFilter,
  IoChevronDown,
  IoHelpCircleOutline,
} from "react-icons/io5";
import "../App.css";

import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

function Catalog() {

  const navigate = useNavigate();
  const[products,setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async() => {
    const {data} = await axios.get("/api/listing/getListings");
    setProducts(data);
    };
    fetchProducts();
  },[]);

  return (
    <div className="flex flex-1 flex-col bg-gray-100 h-screen overflow-hidden">
      <div className="flex flex-row flex-1 z-1 overflow-hidden">
        <div className=" w-80 bg-gray-50 shadow-md shadow-gray-200 p-8">
          <div className="mb-3">
            <div className="font-semibold text-lg cursor-pointer mb-1">
              Cards
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Baseball Cards
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Gumpack Cards
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Yu-Gi-Yu Cards
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-lg cursor-pointer mb-1">
              Jewelry
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Rings
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Necklaces
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Earrings
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Pendants
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Bracelets
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-lg cursor-pointer mb-1">
              Price
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              Under $50
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              $50 to $100
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              $100 to $200
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              $200 to $500
            </div>
            <div className="ml-5 text-md cursor-pointer hover:text-orange-600">
              {"$500 & Above"}
            </div>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-lg cursor-pointer mb-1">
              Avg. Seller's Reviews
            </div>
            <div className="ml-5 text-md cursor-pointer flex flex-row items-center hover:text-orange-600">
              <IoStar className="text-orange-600" />
              <IoStar className="text-orange-600" />
              <IoStar className="text-orange-600" />
              <IoStar className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <div className="ml-1 text-sm">{"& Up"}</div>
            </div>
            <div className="ml-5 text-md cursor-pointer flex flex-row items-center hover:text-orange-600">
              <IoStar className="text-orange-600" />
              <IoStar className="text-orange-600" />
              <IoStar className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <div className="ml-1 text-sm">{"& Up"}</div>
            </div>
            <div className="ml-5 text-md cursor-pointer flex flex-row items-center hover:text-orange-600">
              <IoStar className="text-orange-600" />
              <IoStar className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <div className="ml-1 text-sm">{"& Up"}</div>
            </div>
            <div className="ml-5 text-md cursor-pointer flex flex-row items-center hover:text-orange-600">
              <IoStar className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <IoStarOutline className="text-orange-600" />
              <div className="ml-1 text-sm">{"& Up"}</div>
            </div>
          </div>
        </div>

        <div className="px-8 overflow-auto pt-4 flex flex-col">
          <div className="flex flex-row justify-end">
            <div className="h-12 px-5 hover:bg-gray-200 text-gray-900  flex flex-row justify-center items-center cursor-pointer rounded-md">
              {" "}
              <IoFilter className=" text-lg" />
              <div className=" ml-2 font-semibold mr-3 text-md">Sort By</div>
              <IoChevronDown className=" text-lg" />
            </div>
          </div>
          <div className="grid grid-flow-row-dense pt-4 pb-8 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
            {products.map((item) => (
              <div
                className="w-64 bg-gray-50 shadow-md shadow-gray-200 h-min col-span-1 rounded-md"
                onClick={() => {
                  navigate(`/home/product/${item.id}`);
                }}
              >
                <div className="bg-gray-200 bg-opacity-75 w-64 h-52 p-1 cursor-pointer rounded-t-md">
                  <div
                    className="w-full h-full  bg-contain bg-center bg-no-repeat rounded-t-md"
                    style={{ backgroundImage: 'url("' + item.imageURL + '")' }}
                  />
                </div>
                <div className="p-4 z-10 shadow-md shadow-gray-200 bg-gray-50 rounded-b-md">
                  <div className=" text-sm font-semibold text-orange-600 cursor-pointer">
                    {item.category}
                  </div>
                  <div className=" text-2xl mb-1 font-semibold align-text-top">
                    <span className=" font-light text-sm align-text-top">
                      $
                    </span>
                    {item.minBidAmount}
                  </div>
                  <div className="mb-2 cursor-pointer hover:text-orange-600">
                    {item.name}
                  </div>
                  <div className="flex-row flex items-center">
                    <IoStar className=" text-orange-600" />
                    <div className="text-sm ml-1">
                      {item.rating}{" "}
                      <span className="text-gray-500">
                        {"(" + item.reviews + ")"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
