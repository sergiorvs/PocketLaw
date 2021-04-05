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
  mutation restorePassword($email: String!){
  restorePassword(email: $email){
    message{
      title
      description
      type
    }
    fieldErrors{
      field
      messages
    }
    success
  }
}
`;


export const PASSWORD_RESET = gql`
 mutation changePassword($input: RestorePasswordInput!) {
  changePassword(input: $input){
    message{
      title
      description
      type
    }
    success
    errors{
        field
        messages
      }
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

export const UPDATE_ACCOUNT = gql`
  mutation uploadProfileImage($imageProfile: Upload!){
    uploadProfileImage(profileImage: $imageProfile){
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
`;

export const VERIFY_TOKEN = gql`
mutation ($token: String!){
  verifyToken(token: $token){
    payload
  }
}
`;
