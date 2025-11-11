import Link from "next/link";
import NavMenu from "./nav-menu";
import { MJ } from "../svgs/mj";

export default function Header() {
  return (
    <header className="w-full pt-8 sm:pt-16 lg:pt-12 pb-8 sm:pb-16 bg-(--background)">
      <div className="w-full flex flex-row justify-between items-center sm:items-end">
        {/* <div className="w-full flex justify-between"> */}
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
        {/* <div className="flex sm:hidden items-center gap-4">
            <a
              href="https://www.linkedin.com/in/minju-park-509283238"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn width={32} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=jmyYM3EAAAAJ&hl=ko&authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              <GoogleScholar width={32} />
            </a>
          </div> */}
        {/* </div> */}
        <nav className="text-2xl font-light flex flex-row sm:flex-row lg:gap-8">
          <NavMenu href="/about" text="about" knobColor="te-blue" />
          <NavMenu
            href="/publications"
            text="publications"
            knobColor="te-ochre"
          />
          <NavMenu
            href="https://minju-park-website.s3.ca-west-1.amazonaws.com/docs/cv.pdf"
            text="cv"
            knobColor="te-orange"
            isAnchor
          />
        </nav>
      </div>
    </header>
  );
}
