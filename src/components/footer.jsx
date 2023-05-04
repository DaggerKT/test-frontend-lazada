import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
  TiSocialLinkedinCircular,
  TiSocialPinterestCircular,
  TiSocialGooglePlusCircular,
  TiSocialTumblerCircular,
} from "react-icons/ti";

export default function Footer() {
  return (
    <>
      <div className="w-full mt-5">
        <div className="flex ml-40 w-[1200px] border-t-2">

        </div>
        <div className="grid grid-cols-3 gap-4 py-6 px-40">
          <div className="col-span-1 ">
            <img
              src="https://icms-image.slatic.net/images/ims-web/888209b8-a1b1-4d44-8497-0e22c88dfed2.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1 ">
            <img
              src="https://icms-image.slatic.net/images/ims-web/7dc7c8e2-aa43-4323-b58f-2ad06a280c28.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1 ">
            <img
              src="https://icms-image.slatic.net/images/ims-web/8dd49d6c-0591-4b97-91b9-a01df99901bb.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex w-full py-6 px-40">
          <div className="w-1/2">
            <div className="flex justify-between items-start">
              <div className="flex flex-col justify-start items-start w-1/2">
                <h1 className="text-[16px]">Customer Care</h1>
                <ul className="text-category mt-2">
                  <li className="hover:underline hover:cursor-pointer">
                    Help Center
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    How to Buy
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Shipping & Delivery
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    International Product Policy
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    How to Return
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Contact Us
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-start items-start w-1/2">
                <h1 className="text-[16px]">Lazada</h1>
                <ul className="text-category mt-2">
                  <li className="hover:underline hover:cursor-pointer">
                    All Categories
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    About Lazada
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Afﬁliate Program
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Careers
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Terms & Conditions
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Press & Media
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Security
                  </li>
                  <li className="hover:underline hover:cursor-pointer">
                    Intellectual Property Protection
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex items-start mt-5">
              <div className="flex justify-start items-start">
                <img
                  src="https://pbs.twimg.com/profile_images/1643836367410200581/PobVfxQZ_400x400.jpg"
                  alt=""
                  className="h-11 rounded-md"
                />
                <div className="text-base px-5 w-60">
                  <p className="text-orange-500">Go where your heart beats</p>
                  <p className="text-blue-800">Download the App</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <img
                  src="https://www.rapidus.com/wp-content/uploads/2019/07/download-on-app-store-png-download-on-app-store-902.png"
                  alt=""
                  className="h-12 rounded-md"
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="h-12 rounded-md"
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="h-12 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-white px-40 py-6">
          <div className="col-span-1">
            <h1>Payment Methods</h1>
            {/* icon */}
            <div className="flex flex-row mt-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz572qOORdQxD1HHxp4V6Ppaq6svTXLMYVXA&usqp=CAU"
                alt=""
                className="h-6 rounded-md mr-8"
              />
              <img
                src="https://st4.depositphotos.com/1050070/21934/i/600/depositphotos_219349070-stock-photo-chisinau-moldova-september-19-2018.jpg"
                alt=""
                className="h-6 rounded-md mr-8"
              />
              <img
                src="data:image/png;base64,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"
                alt=""
                className="h-6 rounded-md mr-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/2560px-JCB_logo.svg.png"
                alt=""
                className="h-6 rounded-md"
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h1>Delivery Services</h1>
              <div className="grid grid-cols-3 pt-6">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01RNizk522j2cPtaRjc_!!6000000007155-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN013FblIV1u8qO5VGIBd_!!6000000005993-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN019AGufS1l282dNudcg_!!6000000004760-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01WNUpFq1JZjrZz6erP_!!6000000001043-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01LppnTD1ducEfzsBBi_!!6000000003796-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01vin7Ts1FJ0wFlnGyr_!!6000000000465-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01hdJpbW1OBzP399rh5_!!6000000001668-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01OXD8L11Utr29wvyRA_!!6000000002576-2-tps-96-70.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01y24bVy1KtGMTzmi8h_!!6000000001221-2-tps-96-70.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2">
              <h1>Verified by</h1>
              <div className="grid grid-cols-3 pt-6">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1lbmoqYr1gK0jSZR0XXbP8XXa-340-200.png"
                  alt=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1jyJMv.H1gK0jSZSyXXXtlpXa-184-120.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 px-40 py-16 text-gray-500">
          <div className="col-span-1">
            <h1 className="">
              Best Shopping Experience Guaranteed at Lazada Thailand Lazada:
              Redefining “Effortless Shopping”
            </h1>
            <p className=" text-xs py-1.5">
              As online shopping becoming more prevalent now, Lazada Thai is
              always striving to keep up with what the consumers want and need.
              We are making every effort to achieve maximum customer
              satisfaction through seamless transactions and competitive product
              pricing. We are updating and improving our product selection at
              the best prices to delight our customers along with catchy deals,
              flash sales, and other cool promos.
            </p>
            <p className=" text-xs py-1.5">
              Sporting a new ‘heart’ logo mark that shows the letter “L” as a
              three-dimensional box, Lazada is committing to providing better
              and more unique ways to make sure that every transaction is truly
              effortless. The new tagline ‘Go Where Your Heart Beats’ represents
              the company’s vision to boost the online shopper and seller
              experience through commerce and technology. The colorful heart
              logo is a youthful, energetic look, that symbolizes the vibrancy
              of shopping and today’s digital age.
            </p>
            <h1 className="">EASY SHOPPING</h1>
            <p className=" text-xs py-1.5">
              “Effortless shopping” has been our goal throughout the years,
              promising every customer with nothing but hassle-free, and
              convenient online shopping experience. We have sorted everything
              to ease your search through our user-friendly website and App.
              Products are listed under their respective categories and
              descriptions as well as reviews are openly provided.
            </p>
            <p className=" text-xs py-1.5">
              With LazMall, you won’t run out of options as we collaborated with
              hundreds of top brands worldwide. There
            </p>
          </div>
          <div className="col-span-1">
            <p className=" text-xs">
              are more and more renowned sellers joining our community to serve
              you too. RedMart also offers a vast selection of grocery items at
              the lowest prices.
            </p>
            <h1 className="">MULTIPLE PAYMENT OPTIONS</h1>
            <p className=" text-xs py-1.5">
              Transacting with us is easy as we accept multiple modes of
              payment. Being a leading online marketplace, we feel responsible
              to give you a safe and secure platform to shop with. Our payment
              gateway keeps all your sensitive information protected from
              unauthorized users and any fraudulent activities. You can pay
              through debit/credit card or cash-on-delivery.
            </p>
            <h1 className="">ISLAND-WIDE SHIPPING & FUSS-FREE RETURNS</h1>
            <p className=" text-xs py-1.5">
              We not only give you an excellent choice of products but also
              extend the luxury of nationwide home delivery. We ship anything to
              your doorsteps anywhere you are on the island. Received a damaged
              shipment? Send it back through our hassle-free returns policy and
              we will send a refund as soon as possible.
            </p>
            <h1 className="">
              THE BIGGEST SALES, FRESH VOUCHERS & COOLEST PROMOS
            </h1>
            <p className=" text-xs py-1.5">
              Attractive deals can be purchased on the website daily. Discount
              codes and multiple vouchers can be redeemed to make the most of
              your shopping. Scoop up these incredible promo codes especially
              during our campaign periods including Birthday Sale, Women’s
              Festival, Mid-Year Festival, 9.9 Sale and Lazada’s most
              anticipated online shopping festivals: 11.11 and 12.12 Sales!
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="">TOP CATEGORIES & BRANDS</h1>
            <p className=" text-xs py-1.5">
              EL <br />
              Hisense , Midea , Haier , Canon , DoHome , Microsoft , LG , TCL ,
              Philips , more...
            </p>
            <p className=" text-xs py-1.5">
              MOTHER & BABY <br />
              MamyPoko , BabyLove , Pampers , Huggies , Merries , Enfagrow , S26
              , Pediasure , HiQ , D-Nee , Foremost , more... HEALTH & BEAUTY
              L'Oreal Paris , Unilever , Estee Lauder , Laneige , Dettol ,
              Ensure , La Roche Posay , P&G , Watsons , Eve and Boy , Bobbi
              Brown , Kiehl's , Lifree Thailand
            </p>
            <p className=" text-xs py-1.5">
              HOME & LIVING <br />
              Index Livingmall , SB Design Square , Superlock , Satin , Seagull
              , FN OUTLET , Lock&Lock , Philips Lighting Thailand , Bosch ,
              PASAYA , 3M Official Online Store , siamlatex , more...
            </p>
            <p className=" text-xs py-1.5">
              Adidas , Under Armour , New Balance , Skechers , Asics , Warrix ,
              Jason , B&G , GrandSport , Yonex , LULAE , Hydro Flask , more...
            </p>
            <p className=" text-xs py-1.5">
              MOTORS <br />
              3M Auto , Meguiars , KENWOOD , Pioneer , Aston , Caltex , FURiO by
              Bangchak , Arctic , Super max and tyre , PLATINUM X , Audio
              Advance , more...
            </p>
            <p className=" text-xs py-1.5">
              FASHION <br />
              Sabina , CONVERSE , Mc Jeans , Topshop , GQ , Wacoal , CALVIN
              KLEIN , Fitflop , TOMS , Thai Designer Club , Keds , Guess , Crocs
              , more...
            </p>
            <p className=" text-xs py-1.5">
              SHOP WORLDWIDE WITH ALIEXPRESS <br />
              Russia , Spain , France , Germany , Poland , Brazil , Saudi Arabia
            </p>
            <p className=" text-xs py-1.5">
              SHOP WORLDWIDE WITH DARAZ <br />
              Pakistan , Bangladesh , Sri Lanka , Myanmar , Nepal
            </p>
          </div>
          <div className="col-span-1">
            <p className=" text-xs py-1.5">
              TOY & GAMES <br />
              hasbro , Lego , Barbie , Mattel , Fisher Price , Crayola ,
              Playmobil , KCtoys , Kiddo Pacific Co.,Ltd. , Cyberdict Technology
              , Joan Miro Thailand , more...
            </p>
            <p className=" text-xs py-1.5">
              GROCERIES <br />
              Unilever , Pepsico , Osotspa , Nescafe Dolce Gusto , Nescafe ,
              MIlo , KAO , Lion , Cellox Zilk and Maxmo , DoiTung , more...
            </p>
            <p className=" text-xs py-1.5">
              MOBILES & TABLETS DEVICES <br />
              Xiaomi , Realme , OPPO , vivo , OnePlus , Infinix , Apple ,
              Samsung , Huawei , more...
            </p>
            <p className=" text-xs py-1.5">
              PET SUPLLIES <br />
              Mars , Nestle Pet , PCG , Hill's , Unicharm Pet , Jerhigh ,
              Bearing , Frontguard , Hana Pet , more
            </p>
            <p className=" text-xs py-1.5">
              ACCESSORIES <br />
              JBL , Sandisk , WD , Sennheiser , Bose , Anker , Fitbit , Sony ,
              TP-Link , Amazfit , more...
            </p>
            <p className=" text-xs py-1.5">
              WATCHES SUNGLASSES JEWELLERY <br />
              RayBan , Oakley Official Store , SEIKO , Casio , Citizen Official
              Store , Timex Official Thailand , Jubilee Diamond , Emporio Armani
              , DKNY , Swatch Official Store , Tissot Official Store , Mido
              Official Store , more...
            </p>
            <p className=" text-xs py-1.5">
              BAGS & TRAVEL <br />
              Samsonite , American Tourister , Herschel , Anello , Furla ,
              Coccinelle , Morgan , Timbuk2 , Guess , Cath Kidston , COACH ,
              Jansport , more...
            </p>
            <p className=" text-xs py-1.5">
              SPECIAL PROMOTIONS
              <br />
              Free Shipping , Utility Bill , Mid-Month
            </p>
            <p className=" text-xs py-1.5">RECOMMEND PRODUCT</p>
          </div>
        </div>

        <div className="flex bg-white px-40 py-10">
          <div className="col-span-1">
            <h1>Lazada Southeast Asia</h1>
            <div className="flex mt-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC2CAMAAAAvDYIaAAAA81BMVEX////OEScAAAArKyupqanNEif8///XW2fwmqPFKz3KFCdAAAB6GiLBGSy0IjL6z9W8ECX++PqgKTNRBQl9GyZNCAq7Gi7QECTFFiinJTi4ITW1IzjMEyW9ECW2DiOhKTp2HCUzAAA9AAAvAQUdHR2tra06AAIzAAVGBQg/CQxPFBdoIiZwISdiIiiLOECYN0KaLjulM0KuKTTCFTKoGimjIzCxFClzJiy3Lz7IKjq9LTu1PUqeP0ooAABBFBGGSEi/b3TTc3vUZG/KYGqBREwZAAA7GxmYbGzeqKvxrrPpm6A4JSOoj47429z30dIyKClxcXEY+NcIAAADQklEQVR4nO3cW3MSdxiA8YWwbbMkJBIOC0hggRBQNNQaTT1UbRsP0US//6cpp1qWPNNpb4rTfX6zVztcLM+87PxveIN+/zRJekUVR8XeMEmS09PToN9PxqPqkeaqo9F4nMyiJPfuT7qVvbTK0l62VLqTyYN7ST9Ixvcfnk075bTOUjlTGo3O9Ozhg/Esymhy9mOjVUprrZSypNlsNcpnT0dJMKxOpo1Ss7afdfMCtdKjabc6j9LtXDR/itOipThLojCMa6VO5WgY9Kp75VZtfifj4rCei2rNRqVaDIpHe+XSfhzmsi4K6/XYKGlGAUYBRgFGAUYBUa6eM8qGMFcPjbLBKMAowCjAKGA9Ss8oS04KCD2n3GYUYBRgFGAUYBRgFLAexcPbipMCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKicB6lZJR1RgHLrRhGSXFSgJMCjAJu/3yiuyvb3su3PatJ6XTXJiUdZaPiVp/2v7I8vKWibGVkvyWzKPVoFWX1b9NtP9L2paJUMzsp4eL60/o7ZRUlyrw4mi+Vaf1NlK+La7Mjju5G7dKjRZThqDs9L9UO09pLh/9E+998+Nu1347bx4/Pp93qMEh6k+n54yfHOj48frKIkgTJ+OmL5xfPdrX78+6zi+cv5tvQX/7y6vWbX7/Xwm9vXv8+7geXb9+9/3D1g+aurj68f/f2ZXD58dP19c2BDg5ubm4Orq8/fbwM8p8Ld4I7+qrwOR/kdwpB8N2mYOnW/f+x5ZcNgsLOKor+YhRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBSwiDL4cnJyUtDCLMWXQT4Y5Ac7WjPIzyZFmwZ/AC3p5NSma63VAAAAAElFTkSuQmCC"
                alt=""
                className="h-8 w-8 object-cover rounded-full border-green-500 border-solid border-2 p-[1px] mr-1.5"
              />
              <img
                src="https://media.komchadluek.net/media/img/size1/2012/08/12/5bhd689bijacj97bbkbef.jpg?x-image-process=style/LG"
                alt=""
                className="h-8 w-8 object-cover rounded-full border-green-500 border-solid border-2 p-[1px] mr-1.5"
              />
              <img
                src="data:image/png;base64,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"
                alt=""
                className="h-8 w-8 object-cover rounded-full border-green-500 border-solid border-2 p-[1px] mr-1.5"
              />
              <img
                src="data:image/png;base64,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"
                alt=""
                className="h-8 w-8 object-cover rounded-full border-green-500 border-solid border-2 p-[1px] mr-1.5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/%E0%B8%98%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%84%E0%B8%97%E0%B8%A2.png"
                alt=""
                className="h-8 w-8 object-cover rounded-full border-green-500 border-solid border-2 p-[1px] mr-1.5"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIPM6MWBSPK-CRf883BxzPuDqtrfus0rBFQ&usqp=CAU"
                alt=""
                className="h-8 w-8 object-cover rounded-full border-green-500 border-solid border-2 p-[1px] mr-1.5"
              />
            </div>
          </div>

          <div className="col-span-1 ml-[23.5rem]">
            <h1>Follow Us</h1>
            <div className="flex flex-row">
              {/* icon */}
              <TiSocialFacebookCircular className="h-9 w-9" />
              <TiSocialTwitterCircular className="h-9 w-9" />
              <TiSocialInstagramCircular className="h-9 w-9" />
              <TiSocialYoutubeCircular className="h-9 w-9" />
              <TiSocialLinkedinCircular className="h-9 w-9" />
              <TiSocialPinterestCircular className="h-9 w-9" />
              <TiSocialGooglePlusCircular className="h-9 w-9" />
              <TiSocialTumblerCircular className="h-9 w-9" />
            </div>
          </div>

          <div className="col-span-1 ml-[12rem] text-sm">
            <h1>© Lazada 2023</h1>
          </div>
        </div>
      </div>
    </>
  );
}
