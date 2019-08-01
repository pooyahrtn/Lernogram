import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../../components';

export type Comment = {
    user: {
        name: string,
    },
    text: string,
    id: string,
}

type Props = {
    closeModal: () => void,
}
export default function CommentModal(props: Props) {
    const { closeModal } = props;
    return (
        <Modal
            closeModal={closeModal}
        >
            {
                comments.map((comment) => (
                    <CommentContainer key={comment.id}>
                        <b>@{comment.user.name}</b><br />
                        {comment.text}
                    </CommentContainer>
                ))
            }
        </Modal>
    );
}

const CommentContainer = styled.div`
    margin: 2rem 2rem;
    padding: 1rem 0;
    font-size: 1.5rem;
    border-bottom: 1px solid lightgray;
`

const comments: Comment[] = [
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '1'
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '2',
    },
    {
        user: {
            name: "POOya",
        },
        text: 'It was a bull shite,',
        id: '3'
    },
]
