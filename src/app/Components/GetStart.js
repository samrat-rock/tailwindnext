import styles from "../style";
import { arrowUp } from "../assets";
import React from "react";
import Image from "next/image";

function getstart() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-black rounded-full w-[100%] h-[100%]`}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
           
          </p>
          <Image src={arrowUp} className="w-[23px] h-[23px]" alt="arrowup" />
        </div>
        <p className="font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default getstart;
