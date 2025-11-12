"use client";

import clsx from "clsx";
import styles from "./nav-menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, ReactNode } from "react";

type Props = {
  href: string;
  text: string;
  knobColor: "te-blue" | "te-ochre" | "te-orange";
};

const bgColorClassNames = {
  "te-gray": "bg-te-gray",
  "te-blue": "bg-te-blue",
  "te-ochre": "bg-te-ochre",
  "te-orange": "bg-te-orange",
} as const;

const knobColorValues = {
  "te-blue": "var(--color-te-blue)",
  "te-ochre": "var(--color-te-ochre)",
  "te-orange": "var(--color-te-orange)",
} as const;

export default function NavMenu({ href, text, knobColor }: Props) {
  const currPath = usePathname();

  return (
    <Link href={href}>
      <div
        className={clsx(
          "flex items-center w-fit gap-2 px-2 sm:px-4 cursor-pointer relative",
          styles.wrapper
        )}
        style={
          {
            "--knob-inner-color": knobColorValues[knobColor],
            "--knob-inner-bar-color":
              knobColor === "te-blue" ? "white" : "black",
          } as CSSProperties
        }
        data-current={currPath === href}
      >
        <div
          className={clsx(
            "sm:hidden absolute w-2 h-2 rounded-full top-0 left-0",
            bgColorClassNames[currPath === href ? knobColor : "te-gray"]
          )}
        />
        <div
          className={clsx(
            "hidden sm:flex w-6 h-6 rounded-full border justify-center items-center",
            styles.knob
          )}
        >
          <div
            className={clsx(
              "w-4 h-4 rounded-full flex justify-center items-center",
              bgColorClassNames[currPath === href ? knobColor : "te-gray"],
              styles["knob-inner"]
            )}
          >
            <div
              className={clsx(
                "w-0.5 h-2.5 rounded-xs opacity-25",
                currPath === href && knobColor === "te-blue"
                  ? "bg-white"
                  : "bg-black",
                styles["knob-inner-bar"]
              )}
            />
          </div>
        </div>
        {text}
      </div>
    </Link>
  );
}
