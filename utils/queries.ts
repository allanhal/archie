import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 2) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
