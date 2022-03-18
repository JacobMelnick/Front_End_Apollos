import { gql } from "@apollo/client";

export const GET_ALL_LINKS = gql`
  query getAllLink {
    list {
      id
      url
    }
  }
`;
