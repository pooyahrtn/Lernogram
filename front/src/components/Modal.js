import React from 'react';
import styled, { keyframes } from 'styled-components';
import { innerViewLayout } from './mixins';

type Props = {
    children: React.FC,
    closeModal: () => void,
}
export function Modal(props: Props) {
    const {
        children,
        closeModal
    } = props;

    return (
        <Container onClick={closeModal}>
            <Content onClick={(event) => { event.stopPropagation() }}>
                <CloseButtonWrapper>
                    <CloseButton onClick={closeModal}>
                    ╳
                    </CloseButton>
                </CloseButtonWrapper>

                {children}

            </Content>
        </Container>
    );
}

const animation = keyframes`
    from {
        transform: translateY(50px);
        opacity: 0.8
    }
    to {
        transform: translateY(0);
        opacity: 1
    }
`

const Container = styled.div`
    background-color: rgba(0,0,0,0.1);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    z-index: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

const Content = styled.div`
    height: 80vh;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    width: '100%';
    overflow: auto;
    position:relative;
    animation: ${animation} 0.1s ease-in-out;
    ${innerViewLayout}
`
const CloseButtonWrapper = styled.div`
    position: sticky;
    top: 0;
`
const CloseButton = styled.button`
    position: absolute;
    font-size: 2.2rem;
    top:0;
    right:0;
    padding: 2rem;
    display:block;
    border: none;
    background-color: inherit;
`
