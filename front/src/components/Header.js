// @flow
import React from 'react';
import styled from 'styled-components';
import { mediumShadow } from './mixins';

const HeaderContainer = styled.nav`
    width: 100%;
    padding: 1rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Bradley Hand, cursive;
    font-size: 3rem;
    z-index: 600;
    position: fixed;
    top: 0;
    background-color: white;
    ${mediumShadow}
`;

export const Header = () => (
    <HeaderContainer>
        LernoGram
    </HeaderContainer>
);
