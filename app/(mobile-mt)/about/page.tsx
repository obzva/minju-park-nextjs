import styles from "./page.module.css";
import InteractiveProfile from "../../components/interactive-profile";

export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-medium">about me</h2>
      <div className="flex flex-col items-start mt-8 gap-8 sm:flex-row relative">
        <div className="text-lg font-light">
          <p>
            I am a PhD-track student in Computer Science at the University of
            British Columbia (UBC), advised by Profs.{" "}
            <a
              href="https://dwyoon.com/"
              target="_blank"
              className={styles["external-link"]}
              rel="noreferrer"
            >
              Dongwook Yoon
            </a>{" "}
            and{" "}
            <a
              href="https://www.cs.ubc.ca/people/cristina-conati"
              target="_blank"
              className={styles["external-link"]}
              rel="noreferrer"
            >
              Cristina Conati
            </a>
            . My research interests lie in{" "}
            <b>Human-Computer Interaction (HCI)</b>, particularly within the
            domain of <b>education</b>. Recently, I have been focusing on
            designing <b>AI-powered systems</b> that empower{" "}
            <b>learner agency</b>.
          </p>
          <p className="mt-8">
            Prior to joining UBC, I worked as an AI researcher at{" "}
            <a
              href="https://socra.ai/"
              target="_blank"
              className={styles["external-link"]}
              rel="noreferrer"
            >
              Socra AI
            </a>
            . I completed my M.S. in Intelligence and Information as a member of{" "}
            <a
              href="https://marg.snu.ac.kr/"
              target="_blank"
              className={styles["external-link"]}
              rel="noreferrer"
            >
              Music and Audio Research Group (MARG)
            </a>{" "}
            at Seoul National University (SNU), advised by Prof. Kyogu Lee. I
            hold a B.S. in Mathematics Education and a B.A. in Information
            Science and Culture, both from SNU.
          </p>
        </div>
        <InteractiveProfile />
      </div>
    </section>
  );
}
