import React from 'react';
import GlobalStyle from './GlobalStyle';

import Home from './pages/home';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Home />
        </React.Fragment>
    )
}
