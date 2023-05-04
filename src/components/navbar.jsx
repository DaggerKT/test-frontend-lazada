import React, { useState } from "react";
import { initFlowbite } from "flowbite";

// icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
// imgs
import logo from "../assets/img/logo/logo.png";
import cart from "../assets/img/icons/cart.png";
import promotion from "../assets/img/ads/promotion.jpg";
import top from "../assets/img/ads/top.png";

export default function Navbar() {
  const [show, setShow] = useState(true);

  // close ads-top
  const closeAdsTop = () => {
    setShow(false);
    document.getElementById("ads-top").style.display = "none";
  };

  return (
    <>
      <div className="w-full bg-pink-600">
      <div className="max-w-screen-xl relative mx-auto px-9" id="ads-top">
        <img src={top} alt="" className="hover:cursor-pointer" />
        <button
          className="absolute top-1.5 right-[3.8rem] hover:cursor-default"
          onClick={() => closeAdsTop()}
        >
          <IoCloseSharp className="text-3xl font-semibold text-white" />
        </button>
      </div>
      </div>

      <nav class="bg-white sticky top-0 w-full z-20">
        <div className=" flex text-xs bg-[#F7F7F7] py-1.5 px-40 justify-end">
          <p className="text-black mx-5 hover:text-orange-400 hover:duration-300">
            SAVE MORE ON APP
          </p>
          <p className="text-black mx-5 hover:text-orange-400 hover:duration-300">
            SELL ON LAZADA
          </p>
          <p className="text-gray-500 mx-5 hover:text-orange-400 hover:duration-300">
            CUSTOMER CARE
          </p>
          <p className="text-gray-500 mx-5 hover:text-orange-400 hover:duration-300">
            TRACK MY ORDER
          </p>
          <p className="text-gray-500 mx-5 hover:text-orange-400 hover:duration-300">
            LOGIN
          </p>
          <p className="text-gray-500 mx-5 hover:text-orange-400 hover:duration-300">
            SIGNUP
          </p>
          <p className="text-gray-500 mx-5 hover:text-orange-400 hover:duration-300">
            เปลี่ยนภาษา
          </p>
        </div>

        <div class="max-w-screen-xl sticky flex mx-auto px-9">
          <div className="pt-5 pb-8">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src={logo} class="h-10" alt="Logo" />
            </a>
          </div>

          <div class="flex ml-20 pt-3 pb-9 ">
            <form action="#">
              <input
                type="search"
                placeholder="Search in Lazada"
                className="bg-search_box border-none rounded-l-sm w-[40rem] h-11 px-5"
              />
              <button
                type="submit"
                className="bg-search_btn rounded-r-sm absolute h-11 w-11 p-2.5"
              >
                <AiOutlineSearch className="text-white text-2xl font-semibold" />
              </button>
            </form>
          </div>

          <div className="flex justify-end items-end ml-16 pb-7 ">
            <img src={cart} alt="" className="h-11 hover:cursor-pointer" />
          </div>
          <div className="flex justify-end items-end ml-10 pb-7 ">
            <img src={promotion} alt="" className="h-11 hover:cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}
