import { Fragment } from "react";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Publications() {
  return (
    <section>
      <h2 className="text-3xl font-medium">projects</h2>
    </section>
  );
}
