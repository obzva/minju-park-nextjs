"use client";

import { useState, useEffect } from "react";
import { MotionMJ } from "../svgs/mj";
import { useReducedMotion } from "motion/react";
import { COLORS } from "../common";

type Props = {
  row: number;
  col: number;
};

export default function Artwall({ row, col }: Props) {
  const [fills, setFills] = useState([
    COLORS[2],
    COLORS[2],
    COLORS[0],
    COLORS[3],
  ]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      const shuffled = [...COLORS];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setFills(shuffled);
    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="w-full flex flex-col gap-4">
      {Array.from({ length: row }).map((_, i) => (
        <div className="w-full flex justify-between" key={`MJ-row-${i}`}>
          {Array.from({ length: col }).map((_, j) => (
            <MotionMJ key={`MJ-logo-${i}-${j}`} fills={fills} />
          ))}
        </div>
      ))}
    </div>
  );
}
