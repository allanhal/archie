import styles from "../styles/Home.module.css";
import client from "../utils/apollo-client";
import { GET_LAUNCHES } from "../utils/queries";

export default function Home(props: any) {
  return (
    <div className={styles.container}>
      {/* <span>{JSON.stringify(props.data)}</span> */}
      {props.data.map((launch: any) => (
        <div key={launch.mission_name}>
          <span>Mission name: {launch.mission_name}</span>
          {launch.details && <span>Details: {launch.details}</span>}
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
