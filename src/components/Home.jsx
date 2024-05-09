import { useRef, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { detailsContext } from "../utils/Context";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "../utils/Axios";

const Home = () => {
  const [data] = useContext(detailsContext);

  const discription = data.discription;

  const divstyle = {
    background: `linear-gradient(#000000 50%, transparent 100%)`,
  };
  const divstyle1 = {
    background: `linear-gradient(to right,#00000099 75%, transparent 100%)`,
  };

  return (
    <>
      <div className="bg-neutral-900 w-full  h-fit pb-[40px] text-white">
        <Navbar />
        <div className="h-[100vh] relative">
          <div
            style={divstyle}
            className="absolute w-full z-20  h-[10%] top-0 bg-black"
          ></div>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-full z-1"
          >
            {data.slice(0, 5).map((item, index) => (
              <Link key={index} to={``}>
                <SwiperSlide className="relative">
                  <Link to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                    <div
                      className="absolute w-[60%] h-full flex flex-col justify-center items-start pl-[5%]"
                      style={divstyle1}
                    >
                      <h2 className="text-xl text-center font-semibold">
                        {item.genres}
                      </h2>
                      <h2>{item.description}</h2>
                      <h3 className="text-xl text-center font-semibold">
                        rating
                      </h3>
                      <h3 className="text-xl text-center font-semibold">
                        {`Season ${item.season} `}
                      </h3>
                      <h4 className="text-xl text-center font-semibold"></h4>
                    </div>
                    <img
                      className="w-1/3 h-full object-cover"
                      src={item.thumnail}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              </Link>
            ))}
          </Swiper>
        </div>
        <hr className="p-3 m-1  border-transparent bottom-2 h-[-10px] rounded-full" />
        <div className="h-fit w-full relative bg-transparent flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-semibold">Trending</h1>
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <div className="scroll-ps-6 w-full h-fit flex  overflow-x-auto">
              <div
                className="h-fit rounded-lg  flex gap-4 overflow-auto flex-shrink-0"
                style={{
                  width: "fitContent",
                  WebkitScrollbar: { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {data.map((item, index) =>
                  item.trending ? (
                    <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                      <div className="w-[40vw] h-[69vw] max-w-[300px] max-h-[500px] rounded-lg overflow-hidden object-cover relative">
                        <div className="absolute flex flex-col gap-5 duration-500 w-full h-full bg-[#00000099] text-white flex p-4 felx-col opacity-0 hover:opacity-100  ">
                          <h1 className="font-semibold">{item.animename}</h1>
                          <div className="w-[10vw] h-fit ">
                            <div
                              style={{ flexDirection: "row" }}
                              className="w-[20vw] overflow-hidden h-fit"
                            >
                              <div
                                className="w-[20vw]"
                                style={{ flexShrink: 0 }}
                              >
                                {item.discription}
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <Link
                              to="/"
                              className="bg-[rgba(255,0,0,0.5)] text-[3vw] backdrop-blur-lg rounded-full px-4 py-1 "
                            >
                              {" "}
                              watch now{" "}
                            </Link>
                          </div>
                        </div>
                        <img
                          className="w-full h-full rounded-lg object-cover"
                          src={item.thumnail}
                          alt=""
                        />
                        <div className="absolute text-center top-3/4 text-[2em] font-semibold text-red-700 left-0 z-20 w-full h-2/3 bg-[#000000a6] backdrop-blur-lg">
                          {item.animename}
                        </div>
                      </div>
                    </Link>
                  ) : null
                )}

                <card className="w-[40vw]  max-w-[300px] max-h-[200px]rounded-lg overflow-hidden object-cover relative">
                  <Link to="/all/populer">
                    <div className="absolute flex flex-col items-center gap-[1vw] justify-center  duration-500 w-full h-full bg-[#00000099] text-white felx p-4 felx-col opacity-100   ">
                      <h1 className="text-[10vw]">View all</h1>
                      <div className="mt-[20px]">
                        <Link
                          to="/"
                          className=" backdrop-blur-lg rounded-full text-3xl px-4 py-1 mt-[10px]"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="64"
                            height="64"
                            fill="currentColor"
                          >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </card>
              </div>
            </div>
          </div>
        </div>
        <hr className="p-3 mt-3 border-zinc-500 h-[1px] rounded-full" />
        <div className="h-fit w-full relative bg-transparent flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-semibold">Populer</h1>
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <div className="scroll-ps-6 w-full h-fit flex  overflow-x-auto">
              <div
                className="h-fit rounded-lg  flex gap-4 overflow-auto flex-shrink-0"
                style={{
                  width: "fitContent",
                  WebkitScrollbar: { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {data.map((item, index) =>
                  item.popular ? (
                    <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                      <div className="w-[40vw] h-[69vw] max-w-[300px] max-h-[500px] rounded-lg overflow-hidden object-cover relative">
                        <div className="absolute flex flex-col gap-5 duration-500 w-full h-full bg-[#00000099] text-white flex p-4 felx-col opacity-0 hover:opacity-100  ">
                          <h1 className="font-semibold">{item.animename}</h1>
                          <div className="w-[10vw] h-fit ">
                            <div
                              style={{ flexDirection: "row" }}
                              className="w-[20vw] overflow-hidden h-fit"
                            >
                              <div
                                className="w-[20vw]"
                                style={{ flexShrink: 0 }}
                              >
                                {item.discription}
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <Link
                              to="/"
                              className="bg-[rgba(255,0,0,0.5)] text-[3vw] backdrop-blur-lg rounded-full px-4 py-1 "
                            >
                              {" "}
                              watch now{" "}
                            </Link>
                          </div>
                        </div>
                        <img
                          className="w-full h-full rounded-lg object-cover"
                          src={item.thumnail}
                          alt=""
                        />
                        <div className="absolute text-center top-3/4 text-[2em] font-semibold text-red-700 left-0 z-20 w-full h-2/3 bg-[#000000a6] backdrop-blur-lg">
                          {item.animename}
                        </div>
                      </div>
                    </Link>
                  ) : null
                )}

                <card className="w-[40vw]  max-w-[300px] max-h-[200px]rounded-lg overflow-hidden object-cover relative">
                  <Link to="/all/populer">
                    <div className="absolute flex flex-col items-center gap-[1vw] justify-center  duration-500 w-full h-full bg-[#00000099] text-white felx p-4 felx-col opacity-100   ">
                      <h1 className="text-[10vw]">View all</h1>
                      <div className="mt-[20px]">
                        <Link
                          to="/"
                          className=" backdrop-blur-lg rounded-full text-3xl px-4 py-1 mt-[10px]"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="64"
                            height="64"
                            fill="currentColor"
                          >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </card>
              </div>
            </div>
          </div>
        </div>
        <hr className="p-3 mt-3 border-transparent h-[1px] rounded-full" />
        <div className="h-fit w-full relative bg-transparent flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-semibold">newly added</h1>
          <div className="w-full flex flex-wrap gap-4 h-fit p-3 ">
            {data.map((item, index) =>
              item.new === true ? (
                <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                  <div
                    key={index}
                    className="h-[28vw] min-h-[160px] min-w-[140px] flex justify-center items-center flex-col rounded-lg overflow-hidden w-[20vw] bg-zinc-700"
                  >
                    <div className="w-full h-2/3 rounded bg-black">
                      <img
                        src={item.thumnail}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-full h-1/3 text-center pt-3 text-[3vw] font-semibold ">
                      {item.animename}
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>
          <hr className="p-3 mt-3 border-transparent h-[1px] rounded-full" />
          <div className="h-fit w-full relative bg-transparent flex flex-col gap-4 p-4"></div>
          <h1 className="text-3xl font-semibold">ALL</h1>
          <div className="w-full flex flex-wrap gap-4 h-fit p-3 ">
            {data.map((item, index) => (
              <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                <div
                  key={index}
                  className="h-[28vw] min-h-[160px] min-w-[140px] flex justify-center items-center flex-col rounded-lg overflow-hidden w-[20vw] bg-zinc-700"
                >
                  <div className="w-full h-2/3 rounded bg-black">
                    <img
                      src={item.thumnail}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-1/3 text-center pt-3 text-[3vw] font-semibold ">
                    {item.animename}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
