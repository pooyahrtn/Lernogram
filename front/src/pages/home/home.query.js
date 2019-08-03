import gql from "graphql-tag";

export default gql`
{
  feeds{
    id
    image
    caption
    nComments
  	user{
      id
      name
    }
  }
}
`;

