import LinkedIn from "../svgs/linkedin";
import GoogleScholar from "../svgs/google-scholar";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row sm:justify-end gap-4 sm:gap-8 items-center my-4 sm:mt-16 sm:mb-8 font-light">
      <address className="not-italic">
        contact:{" "}
        <a href="mailto:minjupark0821@gmail.com" className={styles.clickable}>
          minjupark0821@gmail.com
        </a>
      </address>
      <div className="flex items-center gap-8 order-first sm:order-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/minju-park-509283238"
            target="_blank"
            rel="noreferrer"
            className={styles.clickable}
          >
            <LinkedIn width={20} />
          </a>
        </div>
        <div className="w-12 h-12 flex items-center justify-center">
          <a
            href="https://scholar.google.com/citations?user=jmyYM3EAAAAJ&hl=ko&authuser=1"
            target="_blank"
            rel="noreferrer"
            className={styles.clickable}
          >
            <GoogleScholar />
          </a>
        </div>
      </div>
      <div>© 2025 minju park all rights reserved</div>
    </footer>
  );
}
