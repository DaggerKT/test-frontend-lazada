import React from "react";

import ads_1 from "../assets/img/ads/1.jpg";

export default function Ads() {
  return (
    <div className="relative bg-pink-600">
      <div className="absolute w-[200px] bg-white left-40">
        <ul className="text-category text-gray-900 border-gray-300">
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Electronic Devices
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Electronic Accessories
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            TV & Home Appliances
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Health & Beauty
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Health & Beauty
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Babies & Toys
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Groceries & Pets
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Home & Lifestyle
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Women's Fashion & Access...
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Men's Fashion & Accessories
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Kid's Fashion & Accessories
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Sports & Travel
          </li>
          <li className="hover:cursor-pointer hover:text-orange-400 p-1">
            Automotive & Motorcycles
          </li>
        </ul>
      </div>

      <div id="default-carousel"  className="flex w-full px-[152px]" data-carousel="slide">
        <div className="w-[980px] ml-52">
            <img src={ads_1} alt="" />
        </div>
      </div>
    </div>
  );
}
