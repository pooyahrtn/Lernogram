import gql from 'graphql-tag';

export default gql`
query allComments($feedId: String!){
  feedComments(feedId:$feedId){
  	id
    comment
    user{
      name
    }
  }
}
`