import client from "../utils/apollo-client";
import { GET_LAUNCHES, GET_LAUNCHES_SEARCH } from "../utils/queries";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import LaunchCards from "./components/LaunchCards";
import { useLazyQuery } from "@apollo/client";
import NewsComponent from "./components/News/index";
import { Launch, News } from "./../utils/typings";

export default function Home({
  launchesPast,
  latestNews,
}: {
  launchesPast: Launch[];
  latestNews: News[];
}) {
  const [search, setSearch] = useState<string>();
  const [getLaunches, { loading, data }] = useLazyQuery(GET_LAUNCHES_SEARCH);

  const handleSearch = (searched: string) => {
    setSearch(searched);
  };

  useEffect(() => {
    getLaunches({ variables: { search } });
  }, [getLaunches, search]);

  return (
    <>
      <NewsComponent latestNews={latestNews} />
      <Search onSearch={handleSearch} />
      <LaunchCards
        launches={data?.launchesPast || launchesPast}
        loading={loading}
      />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_LAUNCHES,
  });
  const { VERCEL_URL = "http://localhost:3000" } = process.env;
  const latestNews = await fetch(`${VERCEL_URL}/api/latestNews`).then((res) =>
    res.json()
  );

  return {
    props: {
      launchesPast: data.launchesPast,
      latestNews,
    },
  };
}
