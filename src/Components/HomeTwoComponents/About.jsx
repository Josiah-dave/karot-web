import React from "react";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={'https://res.cloudinary.com/karotcloud/image/upload/v1720733292/Landing%20page%20images/tktqic5dky22rk9j3csq.png'} alt="" className=" block w-full" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">Teach Your Kids</div>
            <h4 className="column-title ">
              Teach your kids by <span className="shape-bg">Investment</span> doing
            </h4>
            <div className=" mb-8">
              Parents and kids can invest in stock markets and public companies. Get your kids on the right path to success. It starts with karot
            </div>
            <div className="space-y-8">
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="85%">
                  <span className="block text-black font-semibold mb-2">
                    Investment with karot
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    100%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-primary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="67%">
                  <span className="block text-black font-semibold mb-2">
                    Steeze after investment
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    100%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="95%">
                  <span className="block text-black font-semibold mb-2">
                    Composure upon investment
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    95%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px]  bg-tertiary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
