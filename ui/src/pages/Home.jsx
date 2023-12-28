import React from "react";
import shelf from "../assets/book.png";
import { ActionButton } from "../components/ActionButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/store");
  };

  return (
    <div>
      <div className="mt-12 relative flex flex-col gap-y-12 items-center justify-start w-full">
        <div className="flex flex-col gap-y-12">
          <img
            src={shelf}
            alt="img"
            className="w-[100%] h-[350px] object-contain top-[10%] left-[0%]  hover:translate-y-4 transition-all ease-in-out duration-1000"
          />
          <h1 className="text-[70px] md:text-[70px] md:tracking-normal lg:text-[70px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-4 lg:shadow-md md:hover:text-slate-400">
            Cărturesti <span>mic</span>
          </h1>
        </div>
        <ActionButton text={"Exploră librăria"} onAction={handleExplore} />
      </div>
    </div>
  );
};

export default Home;
