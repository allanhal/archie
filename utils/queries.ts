import { gql } from "@apollo/client";

const { LIMIT = 10 } = process.env;

export const GET_LAUNCHES = gql`
  {
    launchesPast(limit: ${LIMIT}) {
      mission_name
      details
      launch_date_local
      links {
        flickr_images
        wikipedia
      }
    }
  }
`;

export const GET_LAUNCHES_SEARCH = gql`
query Launches($search: String!) {
  launchesPast(limit: ${LIMIT}, find: {mission_name: $search}) {
    mission_name
    details
    launch_date_local
    links {
      flickr_images
      wikipedia
    }
  }
}
`;
