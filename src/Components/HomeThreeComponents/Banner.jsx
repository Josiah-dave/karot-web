/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/2.png')]  bg-no-repeat bg-center overflow-hidden">
      <div className="container relative">
        <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[174px] lg:py-28 md:py-20 py-14">
          <h1 className="  ">
          The Soft Skill 
  
            <span className=" tracking-[-4px] text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
            and Money App
            </span>{" "}
            for kids and teens
          </h1>
          <div className=" plain-text text-gray leading-[30px] mt-8 mb-14">
          Welcome to a world where curiosity meets achievement. Dive into a realm of limitless knowledge and skill-building.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0">
            <Link to="/" className="btn btn-primary">
             Join Karot Today
            </Link>
          </div>
        </div>
        <div className="imge-box absolute right-[-27rem] top-[45%]  -translate-y-1/2 hidden xl:block   ">
          <img className="w-[80%]" src={'https://res.cloudinary.com/karotcloud/image/upload/v1720734688/Landing%20page%20images/d0augnuslc5bfhkuafbq.svg'} alt="" />
          <div className="bg-[#FFF8F8] w-full h-[5rem] -bottom-10 absolute  blur-lg" >

</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
