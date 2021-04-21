import {gql} from "@apollo/client";

export const GET_PRIVACY_POLITICS = gql`
query{
  privacyPolitics
}
`

export const GET_COMPLAIN_BOOK = gql`
query{
  complaintsBook
}
`
