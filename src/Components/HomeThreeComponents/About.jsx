import React from "react";
import { about5, h, videoIcon, whiteWebIcon } from "../../constant/images";

const About = () => {
  return (
    <div className="about-area  section-padding-top pb-16 relative z-[1]">
      <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block">
        <img src={h} alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={'https://res.cloudinary.com/karotcloud/image/upload/v1720733292/Landing%20page%20images/cwbztvvomrelfe539ccx.png'} alt="" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
            <div className="mini-title">Ready to Embark on Your Learning Odyssey?</div>
            <h4 className="column-title ">
            We are changing the way you treat money.
              <span className="shape-bg"> Save, Invest</span>
            </h4>
            <div>
            and Learn on Karot.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-4">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={videoIcon} alt="" className="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Join our learners community
                  </h4>
                  <div>
                  Join thousands of young people on our Q&A forum. Ask questions, gain points, and convert them to money.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-4">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={whiteWebIcon} alt="" className=" " />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Build a wealth of knowledge
                  </h4>
                  <div>
               Enjoy unlimited access to concise soft skills and financial education content on Karot.
                  </div>
                </div>
              </li>

              <li className="flex">
                <div className="flex-none mr-4">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={videoIcon} alt="" className="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Invest and manage money
                  </h4>
                  <div>
                  With parental supervision, you can manage, spend, and invest your money.
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
