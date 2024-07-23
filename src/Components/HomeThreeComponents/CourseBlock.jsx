/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseBlock = () => {
  return (
    <div
      className="lg:pt-10 section-padding-bottom bg-white bg-[url('../images/all-img/section-bg-14.png')] bg-center bg-no-repeat
            bg-cover"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
          <div className="bg-[url('https://res.cloudinary.com/karotcloud/image/upload/v1721716595/card_1_ynfikm.png')] bg-cover  bg-no-repeat p-10  rounded-md">
            <div className="max-w-[337px]">
              <div className="mini-title">Build a Wealth of Knowledge</div>
              <div className=" text-[34px] text-black leading-[51px]">
                Get Unlimited <span className="shape-bg"> Access</span>
              </div>
              <div className=" mt-6 mb-12">
                Get unlimited acces to bite-sized soft skill and financial education content on Karot
              </div>
              <a href="#" className="btn btn-primary">
                Start Learning
              </a>
            </div>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/karotcloud/image/upload/v1721716595/card_2_gicyme.png')]  bg-no-repeat p-10 bg-cover rounded-md">
            <div className="max-w-[337px]">
              <div className="mini-title">Invest and manage money</div>
              <div className=" text-[34px] text-black leading-[51px]">
                Parental <span className="shape-bg">Supervision</span>
              </div>
              <div className=" mt-6 mb-12">
                With parental supervision, you can manage, spend and invest your own money
              </div>
              <a href="#" className="btn btn-black">
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBlock;
