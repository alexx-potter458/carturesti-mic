import React from "react";
import shelf from "../assets/shelf.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-y-4 items-center justify-center w-full min-h-screen ">
        <div className="flex flex-col mt-4">
          <h1 className="text-[70px] md:text-[70px] md:tracking-normal lg:text-[70px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-400">
            Cărturesti <span>mic</span>
          </h1>
          <img
            src={shelf}
            alt="img"
            width={300}
            height={300}
            className="absolute w-[300px] h-[300px] object-cover md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] top-[10%] left-[5%] md:left-[30%] hover:translate-y-4 transition-all ease-in-out duration-1000"
          />
        </div>
        <button className="bg-[#2a2a2a] mt-8 dark:bg-slate-800 text-white p-2 rounded-md cursor-pointer hover:bg-black">
          <Link to="/signin">Explore Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
