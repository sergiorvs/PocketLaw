import { gql } from 'apollo-boost';

export const GET_USER_SESSION = gql`
  query {
    me{
      id
      email
      firstName
      lastName
      profilePicture
      favorites{
        id
        title
        description
      }
    }
  }
`;
