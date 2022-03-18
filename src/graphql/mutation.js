import { gql } from "@apollo/client";

export const CREATE_URL = gql`
  mutation createLink($url: String!) {
    createLink(url: $url) {
      url
    }
  }
`;
