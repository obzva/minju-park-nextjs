import Link from "next/link";
import NavMenu from "./nav-menu";
import { MJ } from "../svgs/mj";

export default function Header() {
  return (
    <header className="w-full pt-8 sm:pt-16 lg:pt-12 pb-8 lg:pb-16 bg-(--background)">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="active:scale-98">
          <Link href="/" className="text-4xl font-medium">
            minju park
          </Link>
        </div>
        <nav className="text-2xl font-light flex w-full sm:w-auto justify-between sm:justify-normal sm:gap-8">
          <NavMenu href="/about" text="about" knobColor="te-blue" />
          <NavMenu
            href="/publications"
            text="publications"
            knobColor="te-ochre"
          />
          <NavMenu href="/projects" text="projects" knobColor="te-green" />
          <NavMenu href="/cv.pdf" text="cv" knobColor="te-orange" />
        </nav>
      </div>
    </header>
  );
}
