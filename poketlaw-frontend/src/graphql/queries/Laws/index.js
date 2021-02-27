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
