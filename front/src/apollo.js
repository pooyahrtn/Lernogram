import ApolloClient from 'apollo-boost';

export default new ApolloClient({
    uri: process.env.back_uri,
});
