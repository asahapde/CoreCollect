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

function Order() {
  const [step, setStep] = useState(0);

  return (
    <div className="p-10 px-20 bg-gray-50">
      <div className="flex flex-row gap-4 mb-10 items-center">
        <div
          className={
            "cursor-pointer " +
            (step == 0
              ? "text-orange-600 font-semibold"
              : "text-gray-900 font-medium")
          }
        >
          Address
        </div>
        <div>
          <IoChevronForward />
        </div>
        <div
          className={
            "cursor-pointer " +
            (step == 1
              ? "text-orange-600 font-semibold"
              : "text-gray-900 font-medium")
          }
        >
          Payment Information
        </div>
        <div>
          <IoChevronForward />
        </div>
        <div
          className={
            "cursor-pointer " +
            (step == 2
              ? "text-orange-600 font-semibold"
              : "text-gray-900 font-medium")
          }
        >
          Shipping
        </div>
        <div>
          <IoChevronForward />
        </div>
        <div
          className={
            "cursor-pointer " +
            (step == 3
              ? "text-orange-600 font-semibold"
              : "text-gray-900 font-medium")
          }
        >
          Confirmation
        </div>
      </div>

      {step == 0 ? (
        <div className="flex flex-col w-2/3">
          <div className="font-semibold mb-2">Country</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <select
              className="w-full bg-transparent outline-none"
              name="cars"
              id="cars"
            >
              <option value="volvo">Canada</option>
              <option value="saab">United States</option>
              <option value="mercedes">Mexico</option>
              <option value="audi">United Kingdom</option>
            </select>
          </div>
          <div className="font-semibold mb-2 mt-1">Full Name</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              type={"text"}
            />
          </div>
          <div className="font-semibold mb-2 mt-1">Phone Number</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              type={"text"}
            />
          </div>
          <div className="font-semibold mb-2 mt-1">Address</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              placeholder="Street address or P.O. Box"
              type={"text"}
            />
          </div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              placeholder="Apt, Suite, Unit, Building"
              type={"text"}
            />
          </div>
          <div className="font-semibold mb-2 mt-1">City</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              type={"text"}
            />
          </div>
          <div className="font-semibold mb-2 mt-1">Province</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <select
              className="w-full bg-transparent outline-none"
              name="cars"
              id="cars"
            >
              <option value="volvo">Ontario</option>
              <option value="saab">Manitoba</option>
              <option value="mercedes">Quebec</option>
              <option value="audi">Alberta</option>
            </select>
          </div>
          <div className="font-semibold mb-2 mt-1">Postal Code</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              type={"text"}
            />
          </div>
          <div className="flex flex-row justify-end">
            <div
              className="bg-orange-600 text-gray-50 text-lg   rounded-md w-44 h-12 mt-2 justify-center items-center flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                setStep(1);
              }}
            >
              <div className="font-semibold">Next</div>
              <IoChevronForward />
            </div>
          </div>
        </div>
      ) : step == 1 ? (
        <div className="flex flex-col w-2/3">
          <div className="font-semibold mb-2 mt-1">Cardholder's Name</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
            <input
              className="w-full bg-transparent outline-none"
              type={"text"}
            />
          </div>
          <div className="font-semibold mb-2 mt-1">Card Number</div>
          <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md justify-center items-center flex-row flex gap-3">
            <IoCard className="text-xl text-gray-500" />
            <input
              className="w-full bg-transparent outline-none"
              type={"number"}
            />
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col" style={{ flex: 2 }}>
              <div className="font-semibold mb-2 mt-1">Expiration Date</div>
              <div className="flex flex-row gap-5">
                <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
                  <input
                    className="w-full bg-transparent outline-none"
                    placeholder="Month"
                    type={"number"}
                    min={1}
                    max={12}
                  />
                </div>
                <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
                  <input
                    className="w-full bg-transparent outline-none"
                    placeholder="Year"
                    type={"number"}
                    min={22}
                    max={99}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-semibold mb-2 mt-1">CVV</div>
              <div className=" w-full px-5 py-3 bg-gray-200 mb-2 rounded-md">
                <input
                  className="w-full bg-transparent outline-none"
                  type={"password"}
                  inputmode={"numeric"}
                  maxLength={3}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div
              className="bg-orange-600 text-gray-50 text-lg   rounded-md w-44 h-12 mt-2 justify-center items-center flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                setStep(2);
              }}
            >
              <div className="font-semibold">Next</div>
              <IoChevronForward />
            </div>
          </div>
        </div>
      ) : step == 2 ? (
        <div className="flex flex-col w-2/3">
          <div className="font-semibold  mt-1">Shipping Estimates</div>
          <div className=" mb-5 mt-1 text-gray-700 ">
            Here are a few shipping estimates based on the address you provided:
          </div>
          <div className="flex flex-row justify-between bg-gray-200 p-5 rounded-md items-center border-2 border-orange-600 mb-5 cursor-pointer">
            <div className="flex flex-row items-center gap-5">
              <IoRadioButtonOn className="text-2xl text-orange-600" />
              <div className="flex flex-col">
                <div className="font-semibold text-xl">Fedex Standard</div>
                <div className="font-medium text-gray-600">3-5 days</div>
              </div>
            </div>
            <div className="font-semibold text-2xl text-orange-600">$10</div>
          </div>
          <div className="flex flex-row justify-between bg-gray-200 p-5 rounded-md items-center border-2 border-gray-300 mb-5 cursor-pointer">
            <div className="flex flex-row items-center gap-5">
              <IoRadioButtonOff className="text-2xl text-gray-400" />
              <div className="flex flex-col">
                <div className="font-semibold text-xl">Fedex Priority</div>
                <div className="font-medium text-gray-600">1-2 days</div>
              </div>
            </div>
            <div className="font-semibold text-2xl">$25</div>
          </div>
          <div className="flex flex-row justify-between bg-gray-200 p-5 rounded-md items-center border-2 border-gray-300 mb-5 cursor-pointer">
            <div className="flex flex-row items-center gap-5">
              <IoRadioButtonOff className="text-2xl text-gray-400" />
              <div className="flex flex-col">
                <div className="font-semibold text-xl">Fedex Overnight</div>
                <div className="font-medium text-gray-600">1 day</div>
              </div>
            </div>
            <div className="font-semibold text-2xl">$50</div>
          </div>
          <div className="flex flex-row justify-end">
            <div
              className="bg-orange-600 text-gray-50 text-lg   rounded-md w-44 h-12 mt-2 justify-center items-center flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                setStep(3);
              }}
            >
              <div className="font-semibold">Next</div>
              <IoChevronForward />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-2/3">
          <div className="font-semibold  mt-1 mb-5">Item Details</div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row gap-5">
              <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
              <div className="flex flex-col justify-between bg-center pt-1 pb-2">
                <div className="font-semibold text-lg">Old Ring</div>
                <div className="text-gray-700">
                  Bids closing in{" "}
                  <span className="font-semibold">3 hours and 5 minutes</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <div className="text-gray-700 text-sm">Bid Amount</div>
              <div className="font-semibold text-2xl text-right">$850</div>
            </div>
          </div>
          <div className="w-full bg-gray-300 mt-6 mb-6" style={{ height: 1 }} />
          <div className="font-semibold  mb-5">Shipping Address</div>

          <div className="flex flex-row justify-between">
            <div>
              <div className="">1235 Richmond St.</div>
              <div className="">London, ON</div>
              <div className="">N6A 3M1</div>
            </div>
            <div>
              <div className="font-semibold text-right">FedEx Standard</div>
              <div className="text-right">Ships in 3-5 days</div>
            </div>
          </div>

          <div className="w-full bg-gray-300 mt-6 mb-6" style={{ height: 1 }} />
          <div className="font-semibold mb-5">Order Summary</div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
              <div className="font-medium text-gray-600 ">SUBTOTAL (CAD)</div>
              <div className="font-medium text-gray-900">$850</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-medium text-gray-600 ">TAXES</div>
              <div className="font-medium text-gray-900">$29.25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-medium text-gray-600 ">SHIPPING</div>
              <div className="font-medium text-gray-900">$10</div>
            </div>

            <div className="flex flex-row justify-between mt-3">
              <div className="font-semibold text-gray-600 ">TOTAL (CAD)</div>
              <div className="font-semibold text-gray-900 ">$889.25</div>
            </div>
          </div>
          <div className="w-full bg-gray-300 mt-6 mb-6" style={{ height: 1 }} />
          <div className="font-semibold mb-5">Payment</div>
          <div className="flex flex-row justify-between mb-5">
            <div className="flex flex-row gap-3 items-center">
              <FaCcVisa className="text-3xl" />
              <div className=" font-semibold">Visa</div>
            </div>
            <div className="font-medium">XXXX XXXX XXXX 1234</div>
            <div>Exp. 12/28</div>
          </div>
          <div className="flex flex-row justify-end">
            <div
              className="bg-orange-600 text-gray-50 text-lg   rounded-md w-44 h-12 mt-2 justify-center items-center flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                setStep(3);
              }}
            >
              <div className="font-semibold">Finish</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
