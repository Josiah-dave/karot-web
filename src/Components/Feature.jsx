import React from "react";

const Feature = () => {
  const sliderArray = [
    {
      header: "Karot E-Wallet",
      text: "An e-wallet for children (ages 9-19) to earn, manage money, and save for future goals with a virtual card.",
      color: "#313948",
      imgSrc: 'https://res.cloudinary.com/karotcloud/image/upload/v1720743117/Landing%20page%20images/iwkzvnjifre2dyhevrvt.png',
    },
    {
      header: "Soft-Skill Education",
      text: "Karot offers real-life lessons in design thinking, problem-solving, collaboration, time management, and more.",
      imgSrc: 'https://res.cloudinary.com/karotcloud/image/upload/v1720743118/Landing%20page%20images/uvcgij2tmdabsclnnsvu.png',
      color: "#6D8B3A",
    },
    {
      header: "Financial Literacy",
      text: "Teaching young people essential money management skills for a successful financial future.",
      imgSrc: 'https://res.cloudinary.com/karotcloud/image/upload/v1720743117/Landing%20page%20images/eufrfiqqbmasvqe1ghfb.png',
      color: "#FF7F29",
    },
    {
      header: "Peer to Pear Learning",
      text: "A knowledge-sharing community where students and experts collaborate to solve questions.",
      color: "#6D8B3A",
      imgSrc: 'https://res.cloudinary.com/karotcloud/image/upload/v1720743118/Landing%20page%20images/dqfutccekq6b20wzkcma.png',
    },
    {
      header: "Parental Monitoring",
      text: "Empowering parents with insights and controls over their child’s activity and spending.",
      color: "#FF7F29",
      imgSrc: 'https://res.cloudinary.com/karotcloud/image/upload/v1720743117/Landing%20page%20images/d0v7eghkx1owos3rnjad.png',
    },
  ];
  
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Core Features</div>
          <div className="column-title ">
            Why <span className="shape-bg">Choose</span> Karot
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10   place-content-center">
         {
          sliderArray && sliderArray.map(({header, text, color, imgSrc}, index)=>(
            <div key={index} className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-karotOrange  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[100px] w-[100px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <img src={imgSrc} alt="" />
              {/* <iconify-icon icon="codicon:globe"></iconify-icon> */}
            </div>
            <h4 className=" lg:text-xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
           {header}
            </h4>
            <div className="transition duration-150 group-hover:text-white">
   
             {text}
            </div>
          </div>
          ))
         }

       
        </div>
      </div>
    </div>
  );
};

export default Feature;
