import React from 'react';
import styled from 'styled-components';
import { mediumShadow, innerViewLayout } from '../../../components';

export const Card = styled.div`
    margin: 3rem 2em 1em;
    overflow: hidden;
    border-radius: 0.5rem;
    padding: 0rem 0rem 2rem;
    ${mediumShadow};
    ${innerViewLayout};
`
const ImageContainer = styled.div`
    width: 100%;
    max-height: 90vw;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    margin: auto 0;
    margin-top: -25%;
`

const UserName = styled.h3`
    margin: 1.5rem;
    font-size:2.5rem;
`

const Caption = styled.h5`
    margin: 1.5rem;
    font-size: 2rem;
`
const Comment = styled.button`
    text-transform: uppercase;
    color: gray;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 1.5rem;
    border: none;
    background-color: inherit;
    :hover{
        color: purple;
    }
`

export type Feed = {
    image: string,
    user: {
        name: string,
    },
    caption: string,
    n_comments: number,
    id: string,
}

type Props = {
    data: Feed,
    onCommendPressed: () => void,
}

export default function FeedCard(props: Props) {
    const {
        data: {
            image,
            user: {
                name: userName
            },
            caption,
            n_comments
        },
        onCommendPressed
    } = props;
    return (
        <Card>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <UserName>{userName}</UserName>
            <Caption>{caption}</Caption>
            <Comment onClick={onCommendPressed}>{n_comments} comments (click to show)</Comment>
        </Card>
    );
}