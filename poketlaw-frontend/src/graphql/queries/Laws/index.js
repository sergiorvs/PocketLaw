import { gql } from 'apollo-boost';

export const GET_ALL_LAWS = gql`
query getAllLaws($page: Int, $searchFilter: String){
  getAllLaws(page: $page, searchFilter: $searchFilter){
    page
    pages
    hasNext
    hasPrev
    objects{
      id
      title
      description
      image
      questionsNumber
      isFavorite
      tag{
        id
        tag
      }
      questionSet{
        id
        question
        answer
      }
    }
  }
}
`;


export const GET_LAW_DETAIL = gql`
  query getQuestionsByLaw($idLaw: ID!){
    getQuestionsByLaw(idLaw: $idLaw){
      id
      title
      description
      questionsNumber
      tag{
        id
        tag
      }
      image
      isFavorite
      questionSet{
        id
        question
        answer
        simpleAnswer
        status
      }
    }
  }
`;


export const GET_FAVORITES = gql`
query getFavorites($page: Int, $searchFilter: String){
  getFavorites(page: $page, searchFilter: $searchFilter){
    page
    pages
    hasNext
    hasPrev
    objects{
      id
      title
      description
      image
      isFavorite
      questionsNumber
      tag{
        id
        tag
      }
    }
  }
}
`
