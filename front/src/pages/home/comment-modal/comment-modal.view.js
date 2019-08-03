import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../../components';

export type Comment = {
    user: {
        name: string,
    },
    comment: string,
    id: string,
}

type Props = {
    closeModal: () => void,
    comments: Comment[],
    loading: boolean,
}
export default function CommentModalView(props: Props) {
    const { closeModal, comments, loading } = props;
    return (
        <Modal
            closeModal={closeModal}
        >
            {
                !loading && comments.map((comment) => (
                    <CommentContainer key={comment.id}>
                        <b>@{comment.user.name}</b><br />
                        {comment.comment}
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