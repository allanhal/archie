import styles from "./index.module.css";
import LaunchCard from "../LaunchCard";
import { Heading } from "@chakra-ui/react";
import { Launch } from "../../../utils/typings";
import { use, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

interface Props {
  launches: Launch[];
  loading: boolean;
}

export default function LaunchCards({ launches, loading }: Props) {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);
  const Message = ({ message }: { message: string }) => (
    <Heading as="h2" size="3xl">
      {message}
    </Heading>
  );

  if (loading)
    return (
      <div className={styles.message}>
        <Message message="Loading data..." />
      </div>
    );

  if (launches?.length === 0)
    return (
      <div className={styles.message}>
        <Message message="No mission found" />
      </div>
    );

  return (
    <div className={styles.cards}>
      {launches?.map(
        ({ mission_name, details, links, launch_date_local }: Launch) => (
          <div key={mission_name}>
            <LaunchCard
              favorites={favorites}
              setFavorites={setFavorites}
              missionName={mission_name}
              details={details}
              imgs={links.flickr_images}
              date={launch_date_local}
              link={links.wikipedia}
            />
          </div>
        )
      )}
    </div>
  );
}
