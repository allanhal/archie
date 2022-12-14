import styles from "../styles/Home.module.css";
import client from "../utils/apollo-client";
import { GET_LAUNCHES } from "../utils/queries";
import LaunchCard from "./card";

export default function Home(props: any) {
  return (
    <div className={styles.container}>
      {props.data.map((launch: any) => (
        <div key={launch.mission_name}>
          <LaunchCard
            missionName={launch.mission_name}
            details={launch.details}
            imgs={launch.links.flickr_images}
            date={launch.launch_date_local}
          />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_LAUNCHES,
  });

  return {
    props: {
      data: data.launchesPast,
    },
  };
}
