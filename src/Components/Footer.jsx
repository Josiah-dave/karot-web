/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className="mb-10 block">
                <img src={'https://res.cloudinary.com/karotcloud/image/upload/v1720734669/Landing%20page%20images/pd4ospcbocspazcytonv.svg'} alt="" />
              </a>
              <p>
              Raising money-smart kids.
              </p>
              <div className="flex gap-5 my-2">
                <img className=" cursor-pointer" width={'40%'} src="https://res.cloudinary.com/karotcloud/image/upload/v1720748292/Landing%20page%20images/wwae9edkln9i5pm5trxk.svg" alt="" />
                <img className=" cursor-pointer" width={'40%'} src="https://res.cloudinary.com/karotcloud/image/upload/v1720748290/Landing%20page%20images/p03b2krzys5zbrjuda82.svg" alt="" />
              </div>
              <ul className="flex space-x-4 pt-8">
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:facebook"></iconify-icon>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:twitter"></iconify-icon>
                  </a>
                </li> */}
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:youtube"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:instagram"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-footer">
            <div className="flex space-x-[100px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Features</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Invest</a>
                  </li>
                  <li>
                    <a href="#">Save money</a>
                  </li>
                  <li>
                    <a href="#">Earn money</a>
                  </li>
                  <li>
                    <a href="#">Chores</a>
                  </li>
                  <li>
                    <a href="#">Set goals</a>
                  </li>
                  {/* <li>
                    <a href="#">Blog</a>
                  </li> */}
                </ul>
              </div>
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Learn</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Soft skills</a>
                  </li>
                  <li>
                    <a href="#">Graphics</a>
                  </li>
                  <li>
                    <a href="#">Coding</a>
                  </li>
               
                </ul>
              </div>

              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Resources</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">eBooks</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
               
                </ul>
              </div>
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Support</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Newsletter</h4>
            <div className="mb-8">
              Join over <span className="text-primary underline">68,000</span>{" "}
              people getting our emails Lorem ipsum dolor sit amet consectet
            </div>
            <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
              <div className="flex-none">
                <span className=" ">
                  <img src="assets/images/icon/mail.svg" alt="" />
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
            <button className="btn btn-primary block w-full text-center">
              Subscribe Now
            </button>
          </div> */}
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; Copyright {updatedDate} | getKarot.com | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
