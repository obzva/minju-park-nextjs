import { Fragment } from "react";
import styles from "./page.module.css";

export default function Publications() {
  return (
    <section>
      <h2 className="text-3xl font-medium">publications</h2>
      {pubs.map((p) => {
        return (
          <article className="mt-8" key={p.title}>
            <h3 className="text-xl">{p.title}</h3>
            <p className="font-light">
              {p.authors.map((a, i) => {
                const AUTHOR_MJ = "Minju Park";
                return (
                  <Fragment key={a}>
                    {a === AUTHOR_MJ || a === AUTHOR_MJ + "*" ? <b>{a}</b> : a}
                    {i !== p.authors.length - 1 && <span>,&nbsp;</span>}
                  </Fragment>
                );
              })}
            </p>
            <p className="font-light text-sm">
              <span>{p.conf}</span>
              &nbsp;•&nbsp;
              <a
                href={p.pdfURL}
                target="_blank"
                className={styles["external-link"]}
                rel="noreferrer"
              >
                <b>pdf</b>
              </a>
            </p>
          </article>
        );
      })}
    </section>
  );
}

const pubs = [
  {
    title: "BIPED: Pedagogically Informed Tutoring System for ESL Education",
    authors: [
      "Soonwoo Kwon",
      "Sojung Kim",
      "Minju Park",
      "Seunghyun Lee",
      "Kyuseok Kim",
    ],
    conf: "ACL 2024",
    pdfURL: "https://arxiv.org/pdf/2406.03486",
  },
  {
    title:
      "Empowering personalized learning through a conversation-based tutoring system with student modeling",
    authors: [
      "Minju Park",
      "Sojung Kim",
      "Seunghyun Lee",
      "Soonwoo Kwon",
      "Kyuseok Kim",
    ],
    conf: "CHI 2024 Extended Abstracts (Late-breaking work)",
    pdfURL: "https://arxiv.org/pdf/2403.14071",
  },
  {
    title:
      "Show me the instruments: Musical instrument retrieval from mixture audio",
    authors: [
      "Kyungsu Kim*",
      "Minju Park*",
      "Haesun Joung*",
      "Yunkee Chae",
      "Yeongbeom Hong",
      "Seonghyeon Go",
      "Kyogu Lee",
    ],
    conf: "ICASSP 2023",
    pdfURL: "https://arxiv.org/pdf/2211.07951",
  },
  {
    title:
      "Exploiting negative preference in content-based music recommendation with contrastive learning",
    authors: ["Minju Park", "Kyogu Lee"],
    conf: "RecSys 2022",
    pdfURL: "https://arxiv.org/pdf/2207.13909",
  },
  {
    title:
      "Improving audio-language learning with mixgen and multi-level test-time augmentation",
    authors: [
      "Eungbeom Kim",
      "Jinhee Kim",
      "Yoori Oh",
      "Kyungsu Kim",
      "Minju Park",
      "Jaeheon Sim",
      "Jinwoo Lee",
      "Kyogu Lee",
    ],
    conf: "arXiv preprint, 2022",
    pdfURL: "https://arxiv.org/pdf/2210.17143",
  },
  {
    title:
      "Do channels matter? Illuminating interpersonal influence on music recommendations",
    authors: ["Hyun Jeong Kim", "So Yeon Park", "Minju Park", "Kyogu Lee"],
    conf: "RecSys 2020 Extended Abstracts (Late-breaking work)",
    pdfURL:
      "https://minju-park-website.s3.ca-west-1.amazonaws.com/docs/do_channels_matter_illuminating_interpersonal_influence_on_music_recommendations.pdf",
  },
];
