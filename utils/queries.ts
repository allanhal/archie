import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      details
      launch_date_local
      links {
        flickr_images
      }
    }
  }
`;
