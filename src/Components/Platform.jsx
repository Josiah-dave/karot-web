/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ok from "../assets/images/svg/ok.svg";
import aboutTwo from "../assets/images/all-img/about2.png";

const Platform = () => {
  return (
    <div className="bg-[url('../images/all-img/section-bg-2.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="lg:grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Best Online Learning Platform</div>
            <h4 className="column-title ">
            Join the #1 soft-skill  
              <span className="shape-bg">development platforms for young</span>   learners in Africa
            </h4>
            <div>
            A truly successful life is shaped not only by academic knowledge but by the valuable life skills they learned.
            </div>
            {/* <ul className=" space-y-2 pt-8">
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    9/10 Average Satisfaction Rate
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    96% Completitation Rate
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={ok} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    Friendly Environment & Expert Teacher
                  </h4>
                </div>
              </li>
            </ul> */}
            <div className="pt-8">
              <a href="#" className=" btn btn-primary">
                Explore Our Courses
              </a>
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6 ">
            <img src={'https://res.cloudinary.com/karotcloud/image/upload/v1720733233/Landing%20page%20images/grderaxf8stcttokcduc.svg'} alt="" className=" mx-auto block w-full"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
