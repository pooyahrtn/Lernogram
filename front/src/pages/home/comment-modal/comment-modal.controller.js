import React from 'react';
import { Query } from 'react-apollo';
import query from './comment-modal.query';
import CommentModalView from './comment-modal.view';


type Props = {
    feedId: string,
    closeModal: () => void
}
export default function CommentModal(props: Props) {
    const {
        feedId,
        closeModal
    } = props;
    return (
        <Query query={query} variables={{ feedId }}>
            {
                ({ loading, error, data }) => {
                    return (
                        <CommentModalView
                            closeModal={closeModal}
                            comments={data.feedComments}
                            loading={loading}
                        />
                    );
                }
            }
        </Query>
    );
}