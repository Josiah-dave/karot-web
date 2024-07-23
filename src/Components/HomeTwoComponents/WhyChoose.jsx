import React from "react";
import { about4, miniHeart, miniTarget } from "../../constant/images";

const WhyChoose = () => {
  return (
    <div className="about-area section-padding bg-[url('../images/all-img/section-bg-8.png')] bg-cover  bg-no-repeat bg-center">
      <div className="container">
        <div className="lg:grid grid-cols-12 lg:gap-10  space-y-6 lg:space-y-0">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Incentive Chores</div>
            <h4 className="column-title ">
            Track all your children's chores with {' '}
              <span className="shape-bg pb-4">Karot</span>
            </h4>
            <div className=" mb-8">
            Get your kids involved in the process and watch the chores get done while rewarding them for completing tasks.
            </div>
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] md:block">
                <div className="bg-white shadow-box7 p-6 rounded">
                  <div>
                    <img src={miniTarget} alt="" />
                  </div>
                  <div className=" font-semibold leading-[27px] text-black mt-3">
                    Learn At Your Own Multiple Courses
                  </div>
                </div>
                <div className="bg-white shadow-box7 p-6 rounded">
                  <div>
                    <img src={miniHeart} alt="" />
                  </div>
                  <div className=" font-semibold leading-[27px] text-black mt-3">
                    We Provide Study Materials
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 ">
            <img
              src={about4}
              alt=""
              className=" block w-full object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
