/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { b1, b2, b3, b4, b5 } from "../../constant/images";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="brands-area pt-20 pb-14 bg-white ">
      <div className="container">
        <ul className="flex flex-wrap items-center lg:justify-between justify-center  ">
            <Marquee pauseOnHover pauseOnClick  className="flex justify-between ">
          {['https://res.cloudinary.com/karotcloud/image/upload/v1720742166/Landing%20page%20images/ez5wcuhp4pcgkw7cbbes.svg', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742167/Landing%20page%20images/ldj9pjme0uwjeqndgqtr.png', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742166/Landing%20page%20images/jlgxsazezsgqtemufudr.png', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742167/Landing%20page%20images/ba0fsdxcunfrnyywobwg.png', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742167/Landing%20page%20images/gavj3pr6mlwjgdvjrhhu.png'].map((item, index) => (
                <li
                  className=" mb-6 last:mb-0 mx-20 last:mr-0  transition duration-150  "
                  key={index}
                >

           
           
          
                <img  className="w-40 block cursor-pointer" src={item} alt="" />
          
            </li>
          ))}
    </Marquee>
        </ul>
      </div>
    </div>
  );
};

export default Brands;
