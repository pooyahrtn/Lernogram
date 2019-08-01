// @flow
import React from 'react';
import { Header } from '../../components';
import FeedCard, { Feed } from './home.components/FeedCard';
import Container from './home.components/Container';
import FeedCardLoader from './home.components/FeedCardLoader';
import CommentModal, { Comment } from './home.components/CommentModal';

type Props = {
    feeds: Feed[],
    loading: boolean,
    isCommentModalVisible: boolean,
    openCommentModal: (feedId: string) => void,
    closeCommentModal: () => void,
}

export default function HomePage(props: Props) {
    const {
        feeds,
        loading,
        isCommentModalVisible,
        openCommentModal,
        closeCommentModal
    } = props;
    return (
        <div>
            <Header />
            <Container>
                {
                    !loading && feeds.map(feed => (
                        <FeedCard
                            key={feed.id}
                            data={feed}
                            onCommendPressed={() => openCommentModal(feed.id)}
                        />
                    ))
                }
                {
                    loading && (
                        <React.Fragment>
                            <FeedCardLoader />
                            <FeedCardLoader />
                        </React.Fragment>
                    )
                }
            </Container>
            {isCommentModalVisible && (
                <CommentModal
                    closeModal={closeCommentModal}
                />
            )}
        </div>
    );
}