import { gql } from 'apollo-boost';

export const ADD_TO_FAVORITES = gql `
mutation ($lawId: ID!){
  addToFavorites(lawId: $lawId){
    message{
      title
      description
      type
    }
    success
    fieldErrors{
      field
      messages
    }
  }
}
`
