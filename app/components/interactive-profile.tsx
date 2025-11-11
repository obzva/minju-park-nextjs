"use client";

import Image from "next/image";
import ThumbUp from "../svgs/thumb-up";
import { motion } from "motion/react";
import { useState } from "react";

export default function InteractiveProfile() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="relative sm:active:scale-99 sm:cursor-pointer order-first sm:order-last self-center"
      onClick={() => {
        setToggle((p) => !p);
      }}
    >
      <motion.div
        className="absolute w-52 right-1 bottom-0 hidden sm:block"
        initial={{ y: 0, rotate: ROTATE, opacity: 0 }}
        animate={{
          y: toggle ? OFFSET : 0,
          rotate: toggle ? 0 : ROTATE,
          opacity: toggle ? 1 : 0,
        }}
        transition={{
          type: "spring",
          duration: 0.3,
          bounce: 0.3,
        }}
      >
        <ThumbUp />
      </motion.div>
      <div className="w-[calc(100vw*3/5)] sm:w-60 aspect-2/3 rounded-md sm:rounded-lg overflow-hidden border border-te-gray relative">
        <Image
          src="/profile-image.png"
          alt="picture of me smiling"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

const OFFSET = 95;
const ROTATE = 90;
