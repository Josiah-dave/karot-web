/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-8">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              >
                <img src={'https://res.cloudinary.com/karotcloud/image/upload/v1720734667/Landing%20page%20images/fex9pieq1kjfsccofpe4.svg'} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li>
                      <Link to={"/"}> Home</Link>
                    </li>

                    <li>
                      <Link to={"/students"}>Students</Link>
                    </li>

                    <li>
                      <Link to={"/parents"}>Parents</Link>
                    </li>

                 
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/about"}>
                            About 1
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/about-two"}>
                            About 2
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor"}>
                            Instructor
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor-two"}>
                            Instructor 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/react-templates/edumim/instructor-details"}
                          >
                            Instructor Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event"}>
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event-single"}>
                            Event Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/error"}>404</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Courses</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/courses"}>
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/courses-sidebar"}>
                            Courses Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-course"}>
                            Single Course
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/blog-standard"}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-blog"}>
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/contacts"}>
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              
                <div className="flex-none flex space-x-[18px]">
                  <div className=" hidden lg:block">
                    <a href="#" className="btn btn-primary py-[15px] px-8">
                   Get Started
                    </a>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
