import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit; 
    }

    body {
        font-weight: 300;
        line-height: 1.6;
        height: 100vh;
        display: flex;
        flex-direction:column;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 

        @media only screen and (max-width: 68.75em) {
            font-size: 50%;
        }
    }
`