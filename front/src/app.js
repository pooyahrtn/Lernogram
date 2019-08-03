import React from 'react';
import { ApolloProvider } from 'react-apollo';
import apoloClient from './apollo';
import GlobalStyle from './GlobalStyle';
import Home from './pages/home';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ApolloProvider client={apoloClient}>
                <Home />
            </ApolloProvider>
        </React.Fragment>
    )
}
