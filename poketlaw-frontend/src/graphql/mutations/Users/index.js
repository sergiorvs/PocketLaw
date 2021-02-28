import { gql } from 'apollo-boost';

/**
 * Mutation to log in
 * @param email
 * @param password
 */
export const LOGIN_VERIFICATION = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      payload
      refreshExpiresIn
      user{
        email
        profilePicture
      }
    }
}
`;

export const PASSWORD_RESET_LINK = gql`
  mutation ($email: String!) {
  sendResetPassword(email: $email){
    success
    feedback{
      message
    }
  }
}
`;

export const PASSWORD_RESET = gql`
  mutation ($input: LinkInput!, $newPassword: String!, $newPassword2: String!){
    restorePassword(inputData: $input, newPassword: $newPassword, newPassword2: $newPassword2){
      fieldErrors {
        field
        messages
      }
      feedback{
        message
        type
      }
      success
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!){
    createUser(input: $input){
      message{
        title
        description
        type
      }
      errors{
        field
        messages
      }
    }
  }
`;

export const ACTIVATE_ACCOUNT = gql`
  mutation activateAccount ($activateData: ActivateAccountInput!){
    activateAccount(activateData: $activateData){
      message{
        title
        description
        type
      }
    }
  }
`;
