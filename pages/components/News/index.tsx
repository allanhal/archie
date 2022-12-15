import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { parseISO } from "date-fns";
import { format } from "date-fns";
import { News } from "./../../../utils/typings";

export default function NewsComponent({ latestNews }: { latestNews: News[] }) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(
      "Latest news: " +
        latestNews
          ?.map(
            (news: News) =>
              `${news.title} (${
                news?.event_date_utc
                  ? format(parseISO(news?.event_date_utc), `MMMMMMM dd, yyyy`)
                  : ""
              })`
          )
          .join(" / ")
    );
  }, [latestNews]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>;
    </div>
  );
}
