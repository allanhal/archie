import type { NextApiRequest, NextApiResponse } from "next";
import { News } from "./../../utils/typings";

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  const data = await fetch("https://api.spacexdata.com/v4/history/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        select: "title event_date_utc",
        sort: {
          event_date_utc: "desc",
        },
      },
    }),
  }).then((res) => res.json());

  res.status(200).json(data.docs);
}
