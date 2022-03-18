import { gql } from "@apollo/client";

export const CREATE_URL = gql`
  mutation createLink($id: String, $url: String!) {
    createLink(id: $id, url: $url) {
      id
      url
    }
  }
`;
