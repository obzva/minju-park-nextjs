import Link from "next/link";
import NavMenu from "./nav-menu";
import { MJ } from "../svgs/mj";

export default function Header() {
  return (
    <header className="w-full pt-8 sm:pt-16 lg:pt-12 pb-8 sm:pb-16 bg-(--background)">
      <div className="w-full flex flex-row justify-between items-center sm:items-end">
        <div className="active:scale-98">
          <Link href="/">
            <div className="sm:hidden">
              <MJ />
            </div>
            <div className="hidden sm:block text-4xl font-medium">
              minju park
            </div>
          </Link>
        </div>
        <nav className="text-2xl font-light flex flex-row sm:flex-row lg:gap-8">
          <NavMenu href="/about" text="about" knobColor="te-blue" />
          <NavMenu
            href="/publications"
            text="publications"
            knobColor="te-ochre"
          />
          <NavMenu href="/cv.pdf" text="cv" knobColor="te-orange" />
        </nav>
      </div>
    </header>
  );
}
