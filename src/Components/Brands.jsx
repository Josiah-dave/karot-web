/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const Brands = ({ section_padding_bottom, section_padding_top }) => {
  return (
    <div
      className={`brands-area bg-[#F5F0E9] ${section_padding_bottom} ${section_padding_top}`}
    >
      <div className="container">
        <div className="text-center text-black text-2xl font-medium mb-[50px]">
          <span className=" shape-bg mini">Trusted</span> Partners Arround
          The World!
        </div>

        <ul className="flex flex-wrap items-center lg:justify-between justify-center  ">
          {['https://res.cloudinary.com/karotcloud/image/upload/v1720742166/Landing%20page%20images/ez5wcuhp4pcgkw7cbbes.svg', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742167/Landing%20page%20images/ldj9pjme0uwjeqndgqtr.png', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742166/Landing%20page%20images/jlgxsazezsgqtemufudr.png', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742167/Landing%20page%20images/ba0fsdxcunfrnyywobwg.png', 'https://res.cloudinary.com/karotcloud/image/upload/v1720742167/Landing%20page%20images/gavj3pr6mlwjgdvjrhhu.png'].map((item, index) => (
            <li
              className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 "
              key={index}
            >
              <a href="#" className=" w-40 block">
                <img src={item} alt="brandImg" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
