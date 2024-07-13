import React from "react";
import mailIcon from "../assets/images/icon/mail.svg";


const Banner = () => {


  return (
    <section
      className={`xl:min-h-screen bg-[url('https://res.cloudinary.com/karotcloud/image/upload/v1720737934/Landing%20page%20images/eyhw1lvl20qz6nnmbyz0.svg')] bg-cover bg-no-repeat bg-center overflow-hidden`}
    >
      <div className="container relative">
        <div className="max-w-[570px] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
          <h1 className="font-[800]">
          The All-In-One
            <span className=" text-[#6D8B3A] inline-block bg-[url('../images/banner/shape.svg')] bg-no-repeat bg-bottom">
        
            Skill  and 
            </span>{" "}
           Money App
          </h1>
          <div className=" plain-text text-gray leading-[30px]">
          The Ultimate soft skill solution and finance app for kids and teens
          </div>
          <div className="bg-white md:flex  rounded-md shadow-e1 items-center py-[10px] relative lg:pr-[10px] lg:pl-[38px] pl-4 pr-4">
            <div className="flex-1 flex items-center lg:mb-0 mb-2">
              <div className="flex-none">
                <span className=" ">
                  <img src={mailIcon} alt="mainIcon" />
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="border-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex-none">
              <button className="btn btn-primary w-full lg:w-auto">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute xl:right-[-28rem]   hidden xl:block    bottom-[10rem]  ">
          <img src={'https://res.cloudinary.com/karotcloud/image/upload/v1720734673/Landing%20page%20images/wq1xyd4wokiqfoczfapv.svg'} alt="manOne"  width={'85%'} />
          <div className="bg-[#F5F0E9] w-full h-[8rem] -bottom-10 absolute  blur-lg" >

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
