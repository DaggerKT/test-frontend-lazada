import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

import Ads from "./ads";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Ads />

        <div className="w-full grid grid-cols-5 gap-4 px-40 py-1">
          <div className="col-span-1 ">
            <div className=" bg-white rounded-full p-1 flex items-center hover:shadow-lg hover:cursor-pointer">
              <img
                src="https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png"
                alt=""
                className="w-8"
              />
              <p className="ml-2">LazMall</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="bg-white rounded-full p-1 flex items-center hover:shadow-lg hover:cursor-pointer">
              <img
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png"
                alt=""
                className="w-8"
              />
              <p className="ml-2">Vouchers</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="bg-white rounded-full p-1 flex items-center hover:shadow-lg hover:cursor-pointer">
              <img
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png"
                alt=""
                className="w-8"
              />
              <p className="ml-2">Top-Up, Bills&Food</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="bg-white rounded-full p-1 flex items-center hover:shadow-lg hover:cursor-pointer">
              <img
                src="https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png"
                alt=""
                className="w-8"
              />
              <p className="ml-2">LazBlog</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="bg-white rounded-full p-1 flex items-center hover:shadow-lg hover:cursor-pointer">
              <img
                src="https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png"
                alt=""
                className="w-8"
              />
              <p className="ml-2">LazPick</p>
            </div>
          </div>
        </div>

        {/* Flash Sale */}
        <div className="w-full px-40 py-6">
          <h1 className="text-2xl">Flash Sale</h1>
          <div className="flex flex-col bg-white mt-1">
            <div className="flex justify-between items-center p-5">
              <div className="flex">
                <h3 className="text-orange-500">On Sale Now</h3>
                <h3 className="ml-16">
                  Ending in &nbsp;
                  <span className="text-orange-100 bg-red-600 p-2 rounded-sm">
                    05
                  </span>{" "}
                  &nbsp; : &nbsp;
                  <span className="text-orange-100 bg-red-600 p-2 rounded-sm">
                    50
                  </span>{" "}
                  &nbsp; : &nbsp;
                  <span className="text-orange-100 bg-red-600 p-2 rounded-sm">
                    30
                  </span>
                </h3>
              </div>
              <div className="flex border-orange-500 border-2 p-2 hover:cursor-pointer">
                <h3 className="text-orange-500">SHOP ALL PRODUCTS</h3>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-6 gap-2 py-2">
              {/* Product Cart */}
              {(() => {
                const items = [];
                for (let i = 0; i < 6; i++) {
                  items.push(
                    <div className="col-span-1 hover:shadow-lg hover:cursor-pointer mb-2">
                      <div className="flex flex-col justify-center">
                        <img
                          src="https://lzd-img-global.slatic.net/g/p/deea4286ea3c1504678bf9aee28dbf13.jpg_400x400q80.jpg_.webp"
                          alt=""
                        />
                        <div className="p-2">
                          <h3 className="text-sm">
                            Product Flash Sale {i + 1}
                          </h3>
                          <h3 className="text-base my-1 text-orange-500">
                            ฿79.00
                          </h3>
                          <div className="flex">
                            <h3 className="text-xs text-gray-400 line-through">
                              ฿186.00
                            </h3>
                            <h3 className="text-xs text-gray-400 ml-2">-58%</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return items;
              })()}
            </div>
          </div>
        </div>

        {/* LazMall */}
        <div className="w-full px-40 py-3">
          <div className="flex flex-col mt-1">
            <div className="flex justify-between items-center">
              <div className="flex">
                <h1 className="text-2xl">LazMall</h1>
              </div>
              <div className="flex items-center justify-center hover:cursor-pointer">
                <h3 className="text-blue-600 text-xs">Shop More</h3>
                <BiChevronRight className="text-blue-600" />
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-6 gap-2 py-2">
              {/* Product Cart */}
              {(() => {
                const items = [];
                for (let i = 0; i < 6; i++) {
                  items.push(
                    <div className="col-span-1 hover:shadow-lg hover:cursor-pointer mb-2">
                      <div className="flex flex-col justify-center">
                        <img
                          src="https://lzd-img-global.slatic.net/g/p/deea4286ea3c1504678bf9aee28dbf13.jpg_400x400q80.jpg_.webp"
                          alt=""
                        />
                        <div className="p-2">
                          <h3 className="text-sm">Product LazMall {i + 1}</h3>
                          <h3 className="text-base my-1 text-orange-500">
                            ฿79.00
                          </h3>
                          <div className="flex">
                            <h3 className="text-xs text-gray-400 line-through">
                              ฿186.00
                            </h3>
                            <h3 className="text-xs text-gray-400 ml-2">-58%</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return items;
              })()}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full px-40 py-3">
          <div className="flex flex-col mt-1">
            <h1 className="text-2xl">Categories</h1>
            <div className="grid grid-cols-8 gap-0.5 py-2">
              {/* Categories */}
              {(() => {
                const items = [];
                for (let i = 0; i < 16; i++) {
                  items.push(
                    <div className="col-span-1 hover:shadow-lg hover:cursor-pointer bg-white">
                      <div className="flex flex-col justify-center items-center">
                        <div
                          className="flex p-5"
                        >
                          <img
                            src="https://lzd-img-global.slatic.net/g/p/0ac97aa1887da2beff7f07ffa0692835.jpg_170x170q80.jpg_.webp"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h3 className="text-sm">Categories {i + 1}</h3>
                        </div>
                      </div>
                    </div>
                  );
                }
                return items;
              })()}
            </div>
          </div>
        </div>

        {/* Just for You */}
        <div className="w-full px-40 py-3">
          <div className="flex flex-col mt-1">
            <div className="flex">
              <h1 className="text-2xl">Just for You</h1>
            </div>
            <hr />
            <div className="grid grid-cols-6 gap-2 py-2">
              {/* Product Cart */}
              {(() => {
                const items = [];
                for (let i = 0; i < 24; i++) {
                  items.push(
                    <div className="col-span-1 hover:shadow-lg hover:cursor-pointer mb-2">
                      <div className="flex flex-col justify-center">
                        <img
                          src="https://lzd-img-global.slatic.net/g/p/deea4286ea3c1504678bf9aee28dbf13.jpg_400x400q80.jpg_.webp"
                          alt=""
                        />
                        <div className="p-2">
                          <h3 className="text-sm">
                            Product Just for You {i + 1}
                          </h3>
                          <h3 className="text-base my-1 text-orange-500">
                            ฿79.00
                          </h3>
                          <div className="flex">
                            <h3 className="text-xs text-gray-400 line-through">
                              ฿186.00
                            </h3>
                            <h3 className="text-xs text-gray-400 ml-2">-58%</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return items;
              })()}
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="w-full px-40 mt-3">
          <div className="flex justify-center items-center hover:cursor-pointer">
            <button className="flex justify-center items-center w-80 border-2 border-blue-600 p-2">
              <h3 className="text-blue-600 text-base">Load More</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
