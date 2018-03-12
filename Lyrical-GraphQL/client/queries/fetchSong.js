import gql from 'graphql-tag';

export default gql`
  query fetchOneById($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
