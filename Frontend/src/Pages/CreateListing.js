import { useState } from "react";
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
  IoChevronForward,
  IoCardSharp,
  IoCard,
  IoRadioButtonOff,
  IoRadioButtonOn,
} from "react-icons/io5";

import { FaCcVisa } from "react-icons/fa";
import "../App.css";
import useToken from "../Services/useToken";
import {Routes, Route, useNavigate} from 'react-router-dom';

async function createListing(listing, token) {
  return fetch('http://localhost:3000/api/listing/createListing', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'authorization': token
      },
      body: JSON.stringify(listing)
  }).then(data => data.json())
}

function CreateListing() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState('Cards');
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [bidStartTime, setBidStartTime] = useState();
  const [bidCloseTime, setBidCloseTime] = useState();
  const [minBidAmount, setMinBidAmount] = useState();
  const [imageURL, setImageURL] = useState();

  const { token, setToken } = useToken();
  const handleSubmit = async e => {
    const listing = await createListing({
       category: category,
       name: name,
       description: description,
       bidStartTime: bidStartTime,
       bidCloseTime: bidCloseTime,
       minBidAmount: minBidAmount,
       imageURL: imageURL
    }, token);

    alert(JSON.stringify(listing));
    navigate('/home/catalog');
}

  return (
    <div className="p-10 px-20 bg-gray-50">
      <div className="flex flex-col w-2/3">
        <div className="font-semibold text-2xl mb-5">Create Listing</div>
        <div className="font-semibold mb-2">Images</div>
        <div className="flex flex-row mb-4 gap-5">
          <div
            className="w-52 h-52 bg-gray-200 rounded-md flex justify-center items-center bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://www.transparentpng.com/thumb/women-bag/5n1fgv-red-textured-women-bag-png.png")',
            }}
          >
            <div className="w-52 h-52 bg-gray-300 hover:opacity-75 opacity-0 flex justify-center items-center cursor-pointer rounded-md">
              <IoRemove className="text-3xl" />
            </div>
          </div>
          <div className="w-52 h-52 bg-gray-200 rounded-md flex justify-center items-center hover:bg-gray-300 cursor-pointer">
            <IoAdd className="text-3xl font-bold" />
          </div>
        </div>
        <div className="font-semibold mb-2 mt-1">Item Image URL</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <input className="w-full bg-transparent outline-none" type={"text"}
            onChange={e => setImageURL(e.target.value)} />
        </div>
        <div className="font-semibold mb-2">Item Category</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <select
            className="w-full bg-transparent outline-none"
            name="cars"
            id="cars"
            onChange={e => setCategory(e.target.value)}
          >
            <option value="Cards">Cards</option>
            <option value="Sports">Sports</option>
            <option value="Antiques">Antiques</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
        <div className="font-semibold mb-2 mt-1">Item Name</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <input className="w-full bg-transparent outline-none" type={"text"}
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="font-semibold mb-2 mt-1">Item Description</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <textarea
            rows={5}
            className="w-full bg-transparent outline-none"
            type={"text"}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="font-semibold mb-2 mt-1">Bid Start Time</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <input
            className="w-full bg-transparent outline-none"
            type={"datetime-local"}
            onChange={e => setBidStartTime(e.target.value)}
          />
        </div>

        <div className="font-semibold mb-2 mt-1">Bid Close Time</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <input
            className="w-full bg-transparent outline-none"
            type={"datetime-local"}
            onChange={e => setBidCloseTime(e.target.value)}
          />
        </div>

        <div className="font-semibold mb-2 mt-1">Minimum Bid Amount (CAD)</div>
        <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
          <input
            className="w-full bg-transparent outline-none"
            type={"number"}
            onChange={e => setMinBidAmount(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end">
          <div
            className="bg-orange-600 text-gray-50 text-lg   rounded-md w-44 h-12 mt-2 justify-center items-center flex flex-row gap-2 cursor-pointer"
            onClick={() => handleSubmit()}>
            <div className="font-semibold">Create</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateListing;
