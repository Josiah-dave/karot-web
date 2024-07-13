/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {


  return (
    <div className="about-area section-padding bg-[#F5F0E9]">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="shadow-lg bg-[url('https://res.cloudinary.com/karotcloud/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1720734673/Landing%20page%20images/rrnjgdi1hqvhde6qd5xo.svg')]  bg-no-repeat  bg-cover bg-bottom">
            {/* <img src={'https://res.cloudinary.com/karotcloud/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1720734673/Landing%20page%20images/rrnjgdi1hqvhde6qd5xo.svg'} alt="aboutOne" className=" mx-auto mt-auto  object-fill" /> */}
          </div>
          <div>
            <div className="mini-title text-karotGreen"> About Karot</div>
            <h4 className="column-title ">
            Welcome to a world 
              <span  className="shape-bg"> where curiosity </span>
            </h4>
            <div>
            meets achievement. Dive into a realm of limitless knowledge and skill-building.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Mission</h4>
                  <div>
                    There are many variations of passages of the Lorem Ipsum
                    available.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Vision</h4>
                  <div>
                    There are many variations of passages of the Lorem Ipsum
                    available.
                  </div>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <a href="#" className=" btn btn-primary">
                Read More Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
