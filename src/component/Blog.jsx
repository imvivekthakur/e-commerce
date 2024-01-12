import React, { useEffect } from "react";
import contactImg from "../assets/contactImg.svg";
import DefaultNavbar from "./Default_Navbar";
import Features from "./Features";
import Footer from "./Footer";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import userImg from "../assets/user.svg";
import calender from "../assets/calender2.svg";
import tag from "../assets/tag.svg";
import search from "../assets/search.svg";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";

const Blog = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <DefaultNavbar />
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0b3JlfGVufDB8fDB8fHww"
          alt="shop"
          className="w-screen h-80 blur-sm object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold">
            Blog
          </span>
        </h1>
      </div>
      <div className="mx-auto">

        <div className="w-[90%] mx-auto mt-5 mb-5 flex flex-col md:flex-row ">
          <div className="left  ">
            <div className="mt-5 pt-10">
              <img src={blog1} alt="" />

              <div className="icons flex gap-5 mt-4 mb-5">
                <div className="flex">
                  <img src={userImg} alt="" />
                  <p className="text-[#9F9F9F]"> Admin</p>
                </div>
                <div className="flex">
                  <img src={calender} alt="" />
                  <p className="text-[#9F9F9F]">14 Oct 2022</p>
                </div>
                <div className="flex">
                  <img src={tag} alt="" />
                  <p className="text-[#9F9F9F]">wood</p>
                </div>
              </div>
              <h1 className="text-2xl">Going all-in with millennial design</h1>
              <p className="text-[#9F9F9F] mt-5 flex flex-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h1 className="mt-5 font-bold underline underline-offset-8 cursor-pointer">
                Read more
              </h1>
            </div>

            <div className="mt-5 pt-10">
              <img src={blog2} alt="" />

              <div className="icons flex gap-5 mt-4 mb-5">
                <div className="flex">
                  <img src={userImg} alt="" />
                  <p className="text-[#9F9F9F]"> Admin</p>
                </div>
                <div className="flex">
                  <img src={calender} alt="" />
                  <p className="text-[#9F9F9F]">14 Oct 2022</p>
                </div>
                <div className="flex">
                  <img src={tag} alt="" />
                  <p className="text-[#9F9F9F]">wood</p>
                </div>
              </div>
              <h1 className="text-2xl">Exploring new ways of decorating</h1>
              <p className="text-[#9F9F9F] mt-5 flex flex-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h1 className="mt-5 font-bold underline underline-offset-8 cursor-pointer">
                Read more
              </h1>
            </div>

            <div className="mt-5 pt-10">
              <img src={blog3} alt="" />

              <div className="icons flex gap-5 mt-4 mb-5">
                <div className="flex">
                  <img src={userImg} alt="" />
                  <p className="text-[#9F9F9F]"> Admin</p>
                </div>
                <div className="flex">
                  <img src={calender} alt="" />
                  <p className="text-[#9F9F9F]">14 Oct 2022</p>
                </div>
                <div className="flex">
                  <img src={tag} alt="" />
                  <p className="text-[#9F9F9F]">wood</p>
                </div>
              </div>
              <h1 className="text-2xl">
                Handmade pieces that took time to make
              </h1>
              <p className="text-[#9F9F9F] mt-5 flex flex-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <h1 className="mt-5 font-bold underline underline-offset-8 cursor-pointer">
                Read more
              </h1>
            </div>
          </div>
          <div className="right ">
            <div className=" h-auto m-9 pt-10 p-4  bg-white rounded-md shadow-md">
              <div className="relative">
                <input
                  type="text"
                  className="search-input w-60 md:w-80 border focus:border-blue-500 focus:outline-5 outline-none px-2 py-1 md:px-4 md:py-2"
                />
                <img
                  src={search}
                  alt="Search Icon absolute"
                  className="search-icon2"
                />
              </div>
              <h2 className="text-xl p-4 mt-5">Categories</h2>
              <table className="w-full text-grey">
                <tbody>
                  <tr>
                    <td className="py-4 px-4 ">Crafts</td>
                    <td className="py-2 px-4">2</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 ">Design</td>
                    <td className="py-2 px-4">8</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 ">Handmade</td>
                    <td className="py-2 px-4">7</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4">Interior</td>
                    <td className="py-2 px-4">1</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 ">Wood</td>
                    <td className="py-2 px-4">6</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="  m-9 pt-10 p-6 bg-white rounded-md shadow-md mb-6">
              <h2 className="text-2xl p-4 mt-5 mb-5">Recent posts</h2>
              <table className="w-full text-grey">
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <td className="py-4 px-4 ">
                      <img src={post1} alt="" />
                    </td>
                    <td className="py-2 px-4">
                      <p className="text-black">
                        Going all-in with millennial design
                      </p>
                      <p>03 Aug 2022</p>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-4 px-4 ">
                      <img src={post2} alt="" />
                    </td>
                    <td className="py-2 px-4">
                      <p className="text-black">
                        Exploring new ways of decorating
                      </p>
                      <p>03 Aug 2022</p>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="py-4 px-4 ">
                      <img src={post3} alt="" />
                    </td>
                    <td className="py-2 px-4">
                      <p className="text-black">
                        Handmade pieces that took time to make
                      </p>
                      <p>03 Aug 2022</p>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="py-4 px-4">
                      <img src={post4} alt="" />
                    </td>
                    <td className="py-2 px-4">
                      <p className="text-black">Modern home in Milan</p>
                      <p>03 Aug 2022</p>
                    </td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <td className="py-4 px-4 ">
                      <img src={post5} alt="" />
                    </td>
                    <td className="py-2 px-4">
                      <p className="text-black">Colorful office redesign</p>
                      <p>03 Aug 2022</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto m-5 flex justify-center">
          <div className="btns mb-9 pb-8">
            <button className="mr-4 border-none bg-primary px-4 py-2 ">
              1
            </button>
            <button className="mr-4 border-none bg-secondary px-4 py-2 ">
              2
            </button>
            <button className="mr-4 border-none  bg-secondary px-4 py-2 ">
              3
            </button>
            <button className="mr-4 border-none  bg-secondary px-4 py-2 ">
              NEXT
            </button>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
};
export default Blog;
