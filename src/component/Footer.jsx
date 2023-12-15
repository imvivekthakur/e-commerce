import React from "react";
import fbImg from "../assets/Facebook.svg";
import instaImg from "../assets/Instagram.svg";
import twitterImg from "../assets/Twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="relative w-full h-[484px] text-left text-[19.48px] text-white font-plus-jakarta-sans bg-primary">
        <div className="absolute top-[165px] left-[101px]  font-medium inline-block w-[355px]">
          Our vision is to provide convenience and help increase your sales
          business.
        </div>
        <div className="absolute top-[73px] left-[101px] w-[306px] h-[54px] text-[38px]">
          <div className="absolute  w-[306px] h-[54px]">
            <b className="absolute  flex items-center w-[306px] h-[54px]">
              Renting Carnival
            </b>
          </div>
        </div>
        <img
          className="absolute top-[16.3rem]  left-[6.9rem] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={fbImg}
        />
        <img
          className="absolute top-[16.3rem]   left-[10.9rem] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={twitterImg}
        />
        <img
          className="absolute top-[16.3rem] left-[14.9rem] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={instaImg}
        />
        <div className="absolute h-[80%] w-[86%] top-[12.6%] right-[6%] bottom-[6.61%] left-[7%] text-base font-poppins">
          <div className="absolute h-[79.8%] w-[57.26%]  right-[1.37%] bottom-[20.2%] left-[41.37%]">
            <div className="absolute h-full w-full  bottom-[0%]">
              <div className="absolute h-full w-[49.58%]  right-[50.42%]">
                <div className="absolute h-full w-[19.32%]  right-[80.68%]">
                  <div className="absolute h-[74.68%] w-[97.06%] top-[25.32%]  left-[2.94%]">
                    <div className="absolute font-medium">Home</div>
                    <div className="absolute top-[30.04%] font-medium">
                      Shop
                    </div>
                    <div className="absolute top-[60.09%] font-medium">
                      About
                    </div>
                    <div className="absolute top-[89.7%] font-medium">
                      Contact
                    </div>
                  </div>
                  <div className="absolute font-medium">Links</div>
                </div>
                <div className="absolute h-[77.56%] w-[39.77%]  bottom-[22.44%] left-[60.23%]">
                  <div className="absolute  font-medium">Help</div>
                  <div className="absolute h-[67%] w-full top-[32.64%] ">
                    <div className="absolute  font-medium">Payment Options</div>
                    <div className="absolute top-[42%] font-medium">
                      Returns
                    </div>
                    <div className="absolute top-[85%] font-medium">
                      Privacy Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[32.37%] w-[40.28%] top-[0.64%] right-[0%] bottom-[66.99%] left-[59.72%]">
                <div className="absolute  font-medium">Newsletter</div>
                <div className="absolute h-[23.76%] w-full top-[76.24%]  text-sm">
                  <div className="absolute ">Enter Your Email Address</div>
                  <div className="absolute h-[8.33%] w-[70.63%] top-[95.83%] right-[29.72%] bottom-[-4.17%] left-[-0.35%] box-border border-t-[1px] border-solid border-white" />
                  <div className="absolute  left-[73.78%] font-medium">
                    SUBSCRIBE
                  </div>
                  <div className="absolute h-[8.33%] w-[26.93%] top-[95.83%] right-[-0.35%] bottom-[-4.17%] left-[73.42%] box-border border-t-[1px] border-solid border-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[15.09%] w-full top-[84.91%] ">
            <div className="absolute h-[1.69%] w-[100.08%]  box-border border-t-[1px] border-solid border-white" />
            <div className="absolute mt-4">
              2023 furino. All rights reverved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
